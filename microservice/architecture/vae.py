import torch
from torch.autograd import Variable
import torch.nn as nn
import torch.nn.functional as F
import torchvision.models as models
import torchvision.transforms as T


# Downsample Block for Encoder
class DownBlock(nn.Module):
    def __init__(self, in_channels, out_channels, scale=4):
        super(DownBlock, self).__init__()
        self.conv1 = nn.Conv2d(in_channels, out_channels//2, 3, 1, 1)
        self.bn1 = nn.BatchNorm2d(out_channels//2)
        self.conv2 = nn.Conv2d(out_channels//2, out_channels, 3, 1, 1)
        self.bn2 = nn.BatchNorm2d(out_channels)
        self.conv3 = nn.Conv2d(in_channels, out_channels, 3, 1, 1)
        self.avgpool = nn.AvgPool2d(scale, scale)
        self.relu = nn.ReLU()

    def forward(self, x):
        res_skip = self.conv3(self.avgpool(x))
        x = self.relu(self.bn1(self.conv1(x)))
        x = self.bn2(self.conv2(self.avgpool(x)))
        return self.relu(x + res_skip)


# VAE Encoder
class Encoder(nn.Module):
    def __init__(self, latent_dim, h_channels=4):
        super(Encoder, self).__init__()
        # Downsample
        self.downblock1 = DownBlock(3, h_channels)
        self.downblock2 = DownBlock(h_channels, h_channels * 4)
        self.downblock3 = DownBlock(h_channels * 4, h_channels * 16)
        # Latent space
        self.conv_mean = nn.Conv2d(h_channels * 16, latent_dim, 4, 1)
        self.conv_log_sigma = nn.Conv2d(h_channels * 16, latent_dim, 4, 1)

    def forward(self, x):
        x = self.downblock1(x)
        x = self.downblock2(x)
        x = self.downblock3(x)
        z_mean = self.conv_mean(x)
        z_log_sigma = self.conv_log_sigma(x)
        return z_mean, z_log_sigma


# Upsample Block for Decoder
class UpBlock(nn.Module):
    def __init__(self, in_channels, out_channels, scale=4):
        super(UpBlock, self).__init__()
        self.conv1 = nn.ConvTranspose2d(in_channels, out_channels//2, 3, 1, 1)
        self.bn1 = nn.BatchNorm2d(out_channels//2)
        self.conv2 = nn.ConvTranspose2d(out_channels//2, out_channels, 3, 1, 1)
        self.bn2 = nn.BatchNorm2d(out_channels)
        self.conv3 = nn.ConvTranspose2d(in_channels, out_channels, 3, 1, 1)
        self.upsample = nn.Upsample(scale_factor=scale, 
            mode="bilinear", align_corners=False)
        self.relu = nn.ReLU()

    def forward(self, x):
        res_skip = self.conv3(self.upsample(x))
        x = self.relu(self.bn1(self.conv1(x)))
        x = self.bn2(self.conv2(self.upsample(x)))
        return self.relu(x + res_skip)


# VAE Decoder
class Decoder(nn.Module):
    def __init__(self, latent_dim, h_channels=4):
        super(Decoder, self).__init__()
        self.upblock1 = UpBlock(latent_dim, h_channels * 16)
        self.upblock2 = UpBlock(h_channels * 16, h_channels * 4)
        self.upblock3 = UpBlock(h_channels * 4, h_channels)
        self.upblock4 = UpBlock(h_channels, h_channels//2)
        self.conv = nn.ConvTranspose2d(h_channels//2, 3, 3, 1, 1)
    
    def forward(self, x):
        x = self.upblock1(x)
        x = self.upblock2(x)
        x = self.upblock3(x)
        x = self.upblock4(x)
        x = self.conv(x)
        return x


# VAE
class VAE(nn.Module):
    def __init__(self, latent_dim, h_channels=8):
        super().__init__()
        # Set up encoder and decoder
        self.encoder = Encoder(latent_dim, h_channels)
        self.decoder = Decoder(latent_dim, h_channels)

    def reparametrize(self, z_mean, z_log_sigma):
        if self.training:
            std = torch.exp(z_log_sigma)
            epsilon = torch.randn_like(std)
            return epsilon.mul(std).add_(z_mean)
        else:
            return z_mean

    def forward(self, x):
        z_params = self.encoder(x)
        z_mean, z_log_sigma = z_params
        z = self.reparametrize(z_mean, z_log_sigma)
        x_rec = self.decoder(z)
        return x_rec, z_mean, z_log_sigma