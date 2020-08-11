import numpy as np
import pandas as pd
from PIL import Image
import os
import torch
import torchvision.transforms as T
from torch.utils.data import Dataset


class DermDataset(Dataset):
    def __init__(self, dataset, transform=True, label=True):
        super().__init__()
        self.image_dir = os.path.join(os.getcwd(), "assets")
        self.transform_image = T.Compose([
            T.Resize(256),
            T.CenterCrop(256),
            T.ToTensor(),
            T.Normalize(mean=[0.485, 0.456, 0.406], 
                std=[0.229, 0.224, 0.225])
        ])
        self.dataset = dataset.values
        self.transform = transform
        self.label = label

    def __len__(self):
        return len(self.dataset)

    def __getitem__(self, index):
        image_name, image_label, image_sublabel = self.dataset[index]
        image_path = os.path.join(self.image_dir, image_name)
        image = Image.open(image_path)
        if self.transform:
            image = self.transform_image(image)
        if self.label:
            return image, image_label
        else:
            return image, image_sublabel


# Load and split dataset
def load_dataset(ratio=0.8, transform=True, label=True):
    columns = ["image_name", "label", "sublabel"]
    dataset_path = os.path.join(os.getcwd(), "dataset.csv")
    dataset = pd.read_csv(dataset_path, header=None, names=columns)
    bad_set = DermDataset(dataset[dataset.label == "None"], transform, label)
    dataset = dataset[dataset.label != "None"]
    rand_idxs = np.random.choice(a=[True, False], size=len(dataset.index), 
        p=[ratio, 1-ratio])
    train_set = DermDataset(dataset[rand_idxs], transform, label)
    test_set = DermDataset(dataset[np.invert(rand_idxs)], transform, label)
    return train_set, test_set, bad_set