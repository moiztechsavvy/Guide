import os
import torch
import torch.nn as nn
from architecture.vae import VAE


# Recursively freeze layer 
def freeze_(model):
    for child in model.children():
        for param in child.parameters():
            param.requires_grad = False
        freeze_(child)
    return model


# Classification model
class VAEClassifier(nn.Module):
    def __init__(self, vae, target, hidden_dim=256, dropout_p=0.25):
        super(VAEClassifier, self).__init__()
        # VAE encoder as feature extractor
        self.encoder = freeze_(vae.encoder)
        # Fully-connected layers
        self.fc1 = nn.Linear(self.encoder.conv_mean.out_channels, hidden_dim)
        self.fc2 = nn.Linear(hidden_dim, target)
        # Dropout
        self.dropout = nn.Dropout(dropout_p)
        # Activation
        self.relu = nn.ReLU()

    def forward(self, x):
        x, _ = self.encoder(x)
        x = x.view(-1, x.size()[1])
        x = self.relu(self.fc1(x))
        x = self.dropout(x)
        x = self.fc2(x)
        return x