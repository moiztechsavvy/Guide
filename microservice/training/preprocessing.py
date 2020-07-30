import cv2
import numpy as np
import pandas as pd
import os
from torch.utils.data import Dataset

IMG_PATH = 'assets/'
DATASET_PATH = 'dataset.csv'


class DermDataset(Dataset):
    def __init__(self, dataset, img_dir=IMG_PATH):
        super().__init__()
        self.dataset = dataset
        self.img_dir = img_dir

    def __len__(self):
        return len(dataset.index)

    def __getitem__(self, index):
        row = self.dataset.iloc[index]
        img_name, label = row.img_name, row.label
        img_path = os.path.join(self.img_dir, img_name)
        image = cv2.imread(img_path, 0)
        return standardize(image), label


def standardize(img, size=(128,128)):
    rescaled = cv2.resize(img, size, interpolation=cv2.INTER_AREA)
    standardized = (rescaled - np.mean(rescaled)) / np.std(rescaled)
    return standardized


def load_dataset(ratio=0.8):
    dataset = pd.read_csv(DATASET_PATH, header=None, names=["img_name", "label", "sublabel"])
    bad_set = dataset[dataset.label == "None"]
    dataset = dataset[dataset.label != "None"]
    rand_idxs = np.random.choice(a=[True, False], size=len(dataset.index), p=[ratio, 1-ratio])
    train_set = dataset[rand_idxs]
    test_set = dataset[np.invert(rand_idxs)]
    return DermDataset(train_set), DermDataset(test_set), DermDataset(bad_set)
