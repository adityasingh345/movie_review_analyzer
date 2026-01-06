from sqlalchemy import Column, Integer, String, Float
from database import Base

class Review(Base):
    __tablename__ = "reviews"

    id = Column(Integer, primary_key=True, index=True)
    text = Column(String)
    label = Column(String)
    score = Column(Float)
