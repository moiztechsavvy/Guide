import architecture 
from architecture import VAE, VAEClassifier
from base64 import b64decode
from flask import Flask, jsonify, request
import io
from PIL import Image
import torch
import torchvision.transforms as T
import utils


app = Flask(__name__)

# Labels
LABELS = utils.get_label_dict()

# Model
device = torch.device('cpu')
vae = VAE(1024)
vae.load_state_dict(torch.load("./models/vae_epoch50.pth", map_location=device))
model = VAEClassifier(vae, len(LABELS))
model.load_state_dict(torch.load("./models/classifier_epoch25.pth", 
    map_location=device))
model.eval()


# Preprocess image
def preprocess(img_bytes):
    image = Image.open(io.BytesIO(img_bytes))
    img_transform = T.Compose([
        T.Resize(256),
        T.CenterCrop(256),
        T.ToTensor(),
        T.Normalize(mean=[0.485, 0.456, 0.406], 
            std=[0.229, 0.224, 0.225])
    ])
    transformed = img_transform(image)
    return transformed.unsqueeze_(0)


# Classify image
def classify(img_bytes):
    img = preprocess(img_bytes)
    output = model.forward(img)
    label = LABELS[torch.argmax(output).item()]
    return label


@app.route('/predict', methods=['POST'])
def predict():
    if request.method == 'POST' and request.is_json:
        b64_img = request.get_json().get('imageData')
        label = classify(b64decode(b64_img))
        return jsonify({'label': label})


if __name__ == '__main__':
    app.run(host="localhost", port=5001, debug=True)