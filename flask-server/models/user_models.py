from flask_sqlalchemy import SQLAlchemy
from uuid import uuid4

db = SQLAlchemy()


# Generate a unique user ID, 32 characters long
def get_uuid():
    return uuid4().hex


class User(db.Model):
    __tablename__ = "user_accounts"
    user_id = db.Column(db.String(32), primary_key=True, unique=True, default=get_uuid)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(254), unique=True, nullable=False)
    password = db.Column(db.String(60), nullable=False)  # Double check if bcrypt is always 60


# class Profile(db.Model):
#     __tablename__ = "user_profiles"
#     # Possibly