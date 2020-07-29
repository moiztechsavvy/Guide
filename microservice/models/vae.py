import torch
import torch.nn as nn
import torch.autograd as autograd


# VAE Encoder
class Encoder(nn.Module):
    def __init__(self, in_dim, hidden_dim, latent_dim):
        super(Encoder, self).__init__()
        self.in_dim = in_dim
        # Intermediate linear transformation
        self.f_hidden = nn.Linear(in_dim, hidden_dim)
        # Latent space parameters
        self.f_z_mean = nn.Linear(hidden_dim, latent_dim)
        self.f_z_log_sigma = nn.Linear(hidden_dim, latent_dim)
        # Activation function
        self.ReLU = nn.ReLU()

    def forward(self, x):
        h = self.ReLU(self.f_hidden(x))
        z_mean = self.f_z_mean(h)
        z_log_sigma = self.f_z_log_sigma(h)
        return z_mean, z_log_sigma


# VAE Decoder
class Decoder(nn.Module):
    def __init__(self, latent_dim, hidden_dim, out_dim):
        super(Decoder, self).__init__()
        # Intermediate linear transformation
        self.f_hidden = nn.Linear(latent_dim, hidden_dim)
        # Reconstruct original input
        self.f_decode = nn.Linear(hidden_dim, out_dim)
        # Activation functions
        self.ReLU = nn.ReLU()
        self.Sigmoid = nn.Sigmoid()
    
    def forward(self, z):
        h = self.ReLU(self.f_hidden(z))
        x = self.Sigmoid(self.f_decode(h))
        return x


# VAE
class VAE(nn.Module):
    def __init__(self, in_dim, hidden_dim, latent_dim):
        super(VAE, self).__init__()
        self.in_dim = in_dim
        # Set up encoder and decoder
        self.encoder = Encoder(in_dim, hidden_dim, latent_dim)
        self.decoder = Decoder(latent_dim, hidden_dim, in_dim)

    def sampling(self, z_params):
        z_mean, z_log_sigma = z_params
        epsilon = autograd.Variable(torch.randn(z_mean.size()))
        return z_mean + torch.exp(z_log_sigma) * epsilon

    def forward(self, x):
        x = x.reshape(-1, self.in_dim)
        z_params = self.encoder(x)
        z = self.sampling(z_params)
        return self.decoder(z)