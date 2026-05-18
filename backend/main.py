from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from typing import List

import models, schemas, database

models.Base.metadata.create_all(bind=database.engine)

app = FastAPI(title="Interior Designer API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production, set to specific origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Welcome to the Interior Designer API"}

@app.post("/reviews/", response_model=schemas.Review)
def create_review(review: schemas.ReviewCreate, db: Session = Depends(database.get_db)):
    db_review = models.Review(**review.model_dump())
    db.add(db_review)
    db.commit()
    db.refresh(db_review)
    return db_review

@app.get("/reviews/", response_model=List[schemas.Review])
def read_reviews(skip: int = 0, limit: int = 100, db: Session = Depends(database.get_db)):
    reviews = db.query(models.Review).offset(skip).limit(limit).all()
    return reviews

@app.post("/contact/", response_model=schemas.Contact)
def create_contact(contact: schemas.ContactCreate, db: Session = Depends(database.get_db)):
    db_contact = models.Contact(**contact.model_dump())
    db.add(db_contact)
    db.commit()
    db.refresh(db_contact)
    return db_contact

@app.post("/recommend-style/")
def recommend_style(req: schemas.StyleRecommendationRequest):
    # Dummy ML recommendation model
    pref = req.preferences.lower()
    if "minimal" in pref or "clean" in pref:
        style = "Minimalist"
        description = "A clean, uncluttered space with neutral colors and simple furniture."
    elif "wood" in pref or "nature" in pref:
        style = "Scandinavian"
        description = "Light woods, natural light, and functional, elegant design."
    elif "metal" in pref or "raw" in pref:
        style = "Industrial"
        description = "Exposed brick, metal fixtures, and a raw, unfinished look."
    else:
        style = "Modern Contemporary"
        description = "Sleek lines, a mix of materials, and a focus on open space."
    
    return {"recommended_style": style, "description": description}

@app.post("/admin/import-google-reviews/")
def import_google_reviews(db: Session = Depends(database.get_db)):
    # Mocking Google Reviews import
    mock_reviews = [
        {"author": "John Doe", "rating": 5.0, "content": "Amazing designs! Transformed our home completely.", "source": "google"},
        {"author": "Jane Smith", "rating": 4.5, "content": "Very professional and timely delivery.", "source": "google"},
    ]
    for rev in mock_reviews:
        db_review = models.Review(**rev)
        db.add(db_review)
    db.commit()
    return {"message": "Google reviews imported successfully", "imported_count": len(mock_reviews)}
