from flask_sqlalchemy import SQLAlchemy
from app import db
from uuid import uuid4
from datetime import datetime as dt  # To make a timestamp


# Generate a unique user ID, 32 characters long
def get_uuid():
    return uuid4().hex


# Class for user account table, all the important information in here
class User(db.Model):
    __tablename__ = "user_accounts"
    user_id = db.Column(db.String(36), primary_key=True, unique=True, default=get_uuid)  # If users are inserted through MySQL the UUID will be 36 chars
    username = db.Column(db.String(30), unique=True, nullable=False)
    password = db.Column(db.String(60), nullable=False)  # Bcrypt should be 60 chars


# Class for user profile table, columns by default to be null and added by user if they wish on edit profile page
class Profile(db.Model):
    __tablename__ = "user_profiles"
    user_id = db.Column(db.String(36), primary_key=True, unique=True)  # This column must have same data from User table inserted when creating a user
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(254), unique=True, nullable=False)
    date_of_birth = db.Column(db.Date)  # This option for future functionality of calculating age and age restricting recommendations -> if null restricted by default
    interests = db.Column(db.Text)
    date_joined = db.Column(db.DateTime(), default=dt.utcnow)


