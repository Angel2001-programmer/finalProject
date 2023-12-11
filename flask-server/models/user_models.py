from flask_sqlalchemy import SQLAlchemy
from uuid import uuid4

db = SQLAlchemy()


# Generate a unique user ID, 32 characters long
def get_uuid():
    return uuid4().hex


# Class for user account table, all the important information in here
class User(db.Model):
    __tablename__ = "user_accounts"
    user_id = db.Column(db.String(32), primary_key=True, unique=True, default=get_uuid)
    username = db.Column(db.String(30), unique=True, nullable=False)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(254), unique=True, nullable=False)
    password = db.Column(db.String(60), nullable=False)  # Double check if bcrypt is always 60


# Class for user profile table, columns by default to be null and added by user if they wish on edit profile page
class Profile(db.Model):
    __tablename__ = "user_profiles"
    username = db.Column(db.String(30), unique=True, nullable=False, foreign_key=True)  # For simplicity going to try using username as the FK instead of user_id
    date_of_birth = db.Column(db.Date)  # This option for future functionality of calculating age and age restricting recommendations -> if null restricted by default
    interests = db.Column(db.Text)  # Not decided all columns yet