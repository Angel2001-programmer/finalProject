from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class BookSuggestions(db.Model):
    __tablename__ = "Books"
    # Continue