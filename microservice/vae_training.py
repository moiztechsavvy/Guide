import architecture
from architecture import VAE
import os
import torch
from torch.utils.data import DataLoader
import torch.nn.functional as F
import utils

# Model path
MODEL_PATH = os.path.join(os.getcwd(), "models")

# Hyperparameters
EPOCHS = 50
BATCH_SIZE = 10
LEARNING_RATE = 0.0001

# Dataset
train_set, test_set, bad_set = utils.load_dataset()
train_loader = DataLoader(train_set, batch_size=BATCH_SIZE, 
    shuffle=True, drop_last=True)
test_loader = DataLoader(test_set, batch_size=BATCH_SIZE, 
    shuffle=True, drop_last=True)

# Device
DEVICE = torch.device("cuda")

# Model
model = VAE(512).to(DEVICE)


# Loss function
def vae_loss(x_rec, x, z_mean, z_log_sigma, beta):
    # Reconstruction loss
    recon_loss = F.binary_cross_entropy_with_logits(x_rec, x, reduction='sum')
    # KL-divergence loss
    kl_loss = -0.5 * torch.mean(1 + z_log_sigma - z_mean**2 - z_log_sigma.exp())
    return recon_loss / x.size()[0] + beta * kl_loss


# Optimizer
opt = torch.optim.Adam(model.parameters(), lr=LEARNING_RATE)


# Training loop
def train(model, device, train_loader, optimizer, epoch, interval=100):
    model.train()
    running_loss = 0.0
    for idx, (x, _) in enumerate(train_loader):
        x = x.to(device)
        # Clear gradients
        opt.zero_grad()
        # Forward pass
        x_rec, z_mean, z_log_sigma = model(x)
        loss = vae_loss(x_rec, x, z_mean, z_log_sigma)
        running_loss += loss.item()
        # Gradient step
        loss.backward()
        opt.step()
        # Report loss
        if (idx + 1) % interval == 0:
            avg_loss = running_loss / interval
            print(f"Current progress: epoch {epoch}, batch {idx + 1}")
            print(f"\tAverage training loss since last log: {avg_loss}")
            running_loss = 0.0


# Test set validation loop
def validate(model, device, test_loader, optimizer, epoch, interval=25):
    model.eval()
    running_loss = 0.0
    with torch.no_grad():
        for idx, (x, _) in enumerate(test_loader):
            x = x.to(device)
            # Forward pass
            x_rec, z_mean, z_log_sigma = model(x)
            loss = vae_loss(x_rec, x, z_mean, z_log_sigma)
            running_loss += loss.item()
            # Report loss
            if (idx + 1) % interval == 0:
                avg_loss = running_loss / interval
                print(f"Current progress: epoch {epoch}, batch {idx + 1}")
                print(f"\tAverage test loss since last log: {avg_loss}")
                running_loss = 0.0


# Training
for epoch in range(EPOCHS):
    train(model, DEVICE, train_loader, opt, epoch)
    if (epoch + 1) % 5 == 0:
        validate(model, DEVICE, test_loader, opt, epoch)
        torch.save(model.state_dict(), 
            os.path.join(MODEL_PATH, f"vae_epoch{epoch + 1}.pth"))