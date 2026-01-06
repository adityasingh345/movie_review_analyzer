# we made seprate model.py because model load once, not on every request, faster and professional

from transformers import pipeline

classifier = pipeline(
    "sentiment-analysis",
    model="adityawdwsd/sentiment-analyzer"
)

def predict(text: str):
    result = classifier(text)[0]
    return {
        "label": result["label"],
        "score": float(result["score"])
    }
