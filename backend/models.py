from sqlalchemy import Column, Integer, String, Text, Float, DateTime
import datetime
from database import Base

class Review(Base):
    __tablename__ = "reviews"

    id = Column(Integer, primary_key=True, index=True)
    author = Column(String, index=True)
    rating = Column(Float)
    content = Column(Text)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
    source = Column(String, default="website") # "website" or "google"

class Contact(Base):
    __tablename__ = "contacts"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    email = Column(String, index=True)
    message = Column(Text)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
