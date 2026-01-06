# Sentiment Analysis App (FastAPI + React)

A full-stack sentiment analysis application built using:

- Hugging Face Transformers
- FastAPI (backend)
- React (frontend)
- SQLite + SQLAlchemy (database)

## Features
- Predict sentiment of text (Positive / Negative)
- Store reviews and predictions in database
- View data using TablePlus
- Clean API architecture

## Tech Stack
- Python
- FastAPI
- Hugging Face
- React
- SQLAlchemy
- SQLite

## How to run locally

### Backend
```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
