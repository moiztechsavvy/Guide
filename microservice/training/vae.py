import torch
from torch.autograd import Variable
import torch.nn as nn
import torch.nn.functional as F
import torchvision.models as models
import torchvision.transforms as T


# VAE Encoder
class Encoder(nn.Module):
    def __init__(self, hidden_dim, latent_dim):
        super(Encoder, self).__init__()
        # Use pretrained resnet model, detach last layer
        resnet = models.resnet50(pretrained=True)
        modules = list(resnet.children())[:-1]
        self.resnet = nn.Sequential(*modules)
        # Intermediate linear transformation
        self.fc = nn.Linear(resnet.fc.in_features, hidden_dim)
        self.bn = nn.BatchNorm1d(hidden_dim, momentum=0.01)
        # Latent space parameters
        self.fc_mean = nn.Linear(hidden_dim, latent_dim)
        self.fc_log_sigma = nn.Linear(hidden_dim, latent_dim)
        # Activation function
        self.relu = nn.ReLU()

    def forward(self, x):
        x = self.resnet(x).view(x.size(0), -1)
        x = self.relu(self.bn(self.fc(x)))
        z_mean = self.fc_mean(x)
        z_log_sigma = self.fc_log_sigma(x)
        return z_mean, z_log_sigma


# VAE Decoder
class Decoder(nn.Module):
    def __init__(self, latent_dim, hidden_dim):
        super(Decoder, self).__init__()
        # Intermediate linear transformation
        self.fc1 = nn.Linear(latent_dim, hidden_dim)
        self.bn1 = nn.BatchNorm1d(hidden_dim, momentum=0.01)
        self.fc2 = nn.Linear(hidden_dim, 64 * 4 * 4)
        self.bn2 = nn.BatchNorm1d(64 * 4 * 4, momentum=0.01)
        # Reconstruct original input with deconvolutional layers
        self.convTranspose1 = nn.Sequential(
            nn.ConvTranspose2d(in_channels=64, out_channels=16,
                kernel_size=(3, 3), stride=(2, 2), padding=(0, 0)
            ),
            nn.BatchNorm2d(16, momentum=0.01),
            nn.ReLU()
        )
        self.convTranspose2 = nn.Sequential(
            nn.ConvTranspose2d(in_channels=16, out_channels=8,
                kernel_size=(3, 3), stride=(2, 2), padding=(0, 0)
            ),
            nn.BatchNorm2d(8, momentum=0.01),
            nn.ReLU()
        )
        self.convTranspose3 = nn.Sequential(
            nn.ConvTranspose2d(in_channels=8, out_channels=3,
                kernel_size=(3, 3), stride=(2, 2), padding=(0, 0)
            ),
            nn.BatchNorm2d(3, momentum=0.01)
        )
        # Activation functions
        self.relu = nn.ReLU()
    
    def forward(self, x):
        x = self.relu(self.bn1(self.fc1(x)))
        x = self.relu(self.bn2(self.fc2(x)))
        x = x.view(-1, 64, 4, 4)
        x = self.convTranspose1(x)
        x = self.convTranspose2(x)
        x = self.convTranspose3(x)
        x = F.interpolate(x, size=(224, 224), mode='bilinear', 
            align_corners=False)
        return x


# VAE
class VAE(nn.Module):
    def __init__(self, hidden_dim=None, latent_dim=None):
        super().__init__()
        self.hidden_dim = hidden_dim
        self.latent_dim = latent_dim

        # Set up encoder and decoder
        self.encoder = Encoder(self.hidden_dim, self.latent_dim)
        self.decoder = Decoder(self.latent_dim, self.hidden_dim)

    def sample(self, z_mean, z_log_sigma):
        if self.training:
            std = z_log_sigma.exp_()
            epsilon = Variable(torch.randn(z_mean.size()))
            return epsilon.mul(std).add_(z_mean)
        else:
            return z_mean

    def forward(self, x):
        z_params = self.encoder(x)
        z_mean, z_log_sigma = z_params
        z = self.sample(z_mean, z_log_sigma)
        x_rec = self.decoder(z)
        return x_rec, z_mean, z_log_sigma