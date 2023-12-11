from flask import Flask, request, jsonify, session
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from flask_session import Session  # Need to find something to replace this
from config import ApplicationConfig
from models.user_models import db, User, Profile
from models.content_models import Books, Anime, Games

# This file might get quite big, might need to have some functions elsewhere and call them here instead

app = Flask(__name__)
app.config.from_object(ApplicationConfig)  # Need to look into how to use MySQL instead of .db, 

bcrypt = Bcrypt(app)
cors = CORS(app, supports_credentials=True)
# server_session = Session(app) # By default session would be client side without this server session, but since enabled it will always be stored on server side
db.init_app(app)

# Will create all tables
with app.app_context():
    db.create_all()

@app.route("/")
def home():
    return "hello"


# Register
@app.route("/register", methods=["POST"])
def register_user():
    username = request.json["username"]  # Gets it from the json
    first_name = request.json["first_name"]
    last_name = request.json["last_name"]
    email = request.json["email"]
    password = request.json["password"]
    
    username_exists = User.query.filter_by(username=username).first() is not None
    email_exists = User.query.filter_by(email=email).first() is not None

    if username_exists:
        return jsonify({"error": "Username is already taken"}), 409
    
    if email_exists:
        return jsonify({"error": "Email is already registered"}), 409

    # Hashing the password
    hashed_password = bcrypt.generate_password_hash(password)
    # Create an instance of the Profile class to add to user_profiles table, all other fields will be null, think need to declare first because it is FK in other table
    new_profile=Profile(username=username)
    db.session.add(new_profile)
    # Creating an instance of User class to add to user_accounts table, user_id will use default generation
    new_user = User(username=username, first_name=first_name, last_name=last_name, email=email, password=hashed_password)
    db.session.add(new_user)

    db.session.commit()

    session["user_id"] = new_user.id  # Doesn't work with flask 3.0

    return jsonify({
        "id": new_user.id,
        "email": new_user.email
    })

# Login
@app.route("/login", methods=["POST"])
def login_user():
    username = request.json["username"]  # Gets it from the json
    password = request.json["password"]
    
    user = User.query.filter_by(username=username).first()

    if user is None:
        return jsonify({"error": "Unauthorised"}), 401
    
    if not bcrypt.check_password_hash(user.password, password):
        return jsonify({"error": "Unauthorised"}), 401
    
    session["user_id"] = user.id  # Doesn't work with flask 3.0
    
    return jsonify({
        "id": user.id,
        "email": user.username
    })


# Logout
@app.route("/logout")
def logout_user():
    session.pop("user_id")  # This won't work currently
    return "200"






if __name__ == "__main__":
    app.run(debug=True)