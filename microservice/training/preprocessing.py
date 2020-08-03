import numpy as np
import pandas as pd
from PIL import Image
import os
import torch
import torchvision.transforms as T
from torch.utils.data import Dataset

IMG_PATH = 'assets/'
DATASET_PATH = 'dataset.csv'
TRANSFORM = T.Compose([
    T.Resize(256),
    T.CenterCrop(224),
    T.ToTensor(),
    T.Normalize(mean=[0.485, 0.456, 0.406],
        std=[0.229, 0.224, 0.225])
])


class DermDataset(Dataset):
    def __init__(self, dataset, img_dir=IMG_PATH, transform=None, label=True):
        super().__init__()
        self.dataset = dataset.values
        self.img_dir = img_dir
        self.transform = transform
        self.label = label

    def __len__(self):
        return len(self.dataset)

    def __getitem__(self, index):
        img_name, img_label, img_sublabel = self.dataset[index]
        img_path = os.path.join(self.img_dir, img_name)
        image = Image.open(img_path)
        if self.transform is not None:
            image = self.transform(image)
        if self.label:
            return image, img_label
        else:
            return image, img_sublabel


# Load and normalize image
def load_img(img_path):
    image = cv2.imread(img_path)
    return normed


# Load and split dataset
def load_dataset(ratio=0.8, transform=TRANSFORM, label=True):
    columns = ["img_name", "label", "sublabel"]
    dataset = pd.read_csv(DATASET_PATH, header=None, names=columns)
    bad_set = DermDataset(dataset[dataset.label == "None"], 
        transform=transform, label=label)
    dataset = dataset[dataset.label != "None"]
    rand_idxs = np.random.choice(a=[True, False], size=len(dataset.index), 
        p=[ratio, 1-ratio])
    train_set = DermDataset(dataset[rand_idxs], 
        transform=transform, label=label)
    test_set = DermDataset(dataset[np.invert(rand_idxs)], 
        transform=transform, label=label)
    return train_set, test_set, bad_set

