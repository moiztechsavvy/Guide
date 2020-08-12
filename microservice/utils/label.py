import json
import numpy as np
import os
import torch


# Get label dict
def get_label_dict(label_path=os.path.join(os.getcwd(), "labels.json")):
    with open("labels.json") as label_json:
        labels = json.load(label_json, 
            object_pairs_hook=lambda p: {int(k): v for k, v in p})
    return labels


# Get label index
def get_label_index(label, source):
    for (key, value) in source.items():
        if label == value:
            return key


# Get batch label indices
def get_batch_label_indices(labels, source, torch_output=True):
    if torch_output:
        out = torch.zeros(len(labels), dtype=torch.long)
    else:
        out = np.zeros(len(labels))
    for idx, label in enumerate(labels):
        label_index = get_label_index(label, source)
        out[idx] = label_index
    return out