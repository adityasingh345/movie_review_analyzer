from fastapi import FastAPI, Depends
from pydantic import BaseModel
from model import predict

from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from database import SessionLocal, engine
from models import Review, Base

app = FastAPI(title="movie review analysis")

from fastapi.middleware.cors import CORSMiddleware

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create DB tables (runs once)
Base.metadata.create_all(bind=engine)

class textrequest(BaseModel):
    text: str
    
# DB session dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
    
@app.post('/predict')
def predict_review(req: textrequest, db: Session = Depends(get_db)):
    result = predict(req.text)
    
    review = Review(
        text= req.text,
        label = result["label"],
        score= result["score"]
    )
    db.add(review)
    db.commit()
    db.refresh(review)
    
    return result