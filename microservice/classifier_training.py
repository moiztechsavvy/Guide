import architecture
from architecture import VAE, VAEClassifier
import json
import os
import torch
from torch.utils.data import DataLoader
import torch.nn as nn
import torch.nn.functional as F
import utils

# Model path
MODEL_PATH = os.path.join(os.getcwd(), "models")

# Labels
LABELS = utils.get_label_dict()

# Hyperparameters
EPOCHS = 50
BATCH_SIZE = 10
LEARNING_RATE = 0.0001

# Dataset
train_set, test_set, bad_set = utils.load_dataset()
train_loader = DataLoader(train_set, batch_size=BATCH_SIZE, 
    shuffle=True, drop_last=True)
test_loader = DataLoader(test_set, shuffle=True)

# Device
DEVICE = torch.device("cuda")

# Model
vae = VAE(512)
vae.load_state_dict(torch.load(os.path.join(MODEL_PATH, "vae_epoch50.pth")))
classifier = VAEClassifier(vae, len(LABELS), 256).to(DEVICE)

# Loss function
criterion = nn.CrossEntropyLoss()

# Optimizer
opt = torch.optim.Adam(
    filter(lambda p: p.requires_grad, classifier.parameters()),
    lr=LEARNING_RATE)


# Train set training loop
def train(model, device, train_loader, optimizer, epoch, interval=100):
    model.train()
    running_loss = 0.0
    for idx, (x, y) in enumerate(train_loader):
        x = x.to(DEVICE)
        y = utils.get_batch_label_indices(y, LABELS).to(DEVICE)
        # Clear gradients
        opt.zero_grad()
        # Forward pass
        y_hat = model(x)
        loss = criterion(y_hat, y)
        running_loss += loss.item()
        # Gradient step
        loss.backward()
        opt.step()
        # Report loss
        if (idx + 1) % interval == 0:
            avg_loss = running_loss / interval
            print(f"Current progress: epoch {epoch + 1}, batch {idx + 1}")
            print(f"\tAverage training loss since last log: {avg_loss}")
            running_loss = 0.0


# Test set validation loop
def validate(model, device, test_loader, optimizer, epoch):
    model.eval()
    confusion_matrix = torch.zeros(len(LABELS), len(LABELS))
    with torch.no_grad():
        for idx, (x, y) in enumerate(test_loader):
            x = x.to(device)
            y_hat = model(x)
            prediction = torch.argmax(y_hat).item()
            probability = y_hat[prediction]
            if probability > 0.5:
                real_label = utils.get_label_index(y.item(), LABELS)
                confustion_matrix[prediction, real_label] += 1
    confusion_matrix.div_(len(test_loader)).mul_(100)
    print(f"Epoch {epoch + 1} test set evaluation:")
    print(f"\tConfusion matrix:\n\t\t{confustion_matrix}")
    print(f"\tOverall accuracy: {torch.sum(torch.diagonal(confusion_matrix))}")


# Training loop
for epoch in range(EPOCHS):
    train(classifier, DEVICE, train_loader, opt, epoch)
    # Check accuracy and save model
    if (epoch + 1) % 5 == 0:
        validate(classificer, DEVICE, test_loader, opt, epoch)
        torch.save(classifier.state_dict(), 
            os.path.join(MODEL_PATH, f"classifier_epoch{epoch + 1}.pth"))