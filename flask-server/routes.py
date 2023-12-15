# This file runs the server
from flask import current_app, jsonify, request, session
from app import create_app, db, bcrypt
from models.user_models import User, Profile
from models.content_models import Books, Anime, Games
from flask_jwt_extended import create_access_token, create_refresh_token, unset_jwt_cookies, get_jwt_identity, jwt_required
from flask_restx import Resource
from config import ApplicationConfig

# Create an application instance
app = create_app(ApplicationConfig)  # Takes in a config now so can unit test with a test config

# Defining routes

@app.route("/")
def home():
    return "hello"


# Register
@app.route("/register", methods=["POST"])
def register_user():
    username = request.json["username"]  # Getting each value from the json
    first_name = request.json["first_name"]
    last_name = request.json["last_name"]
    email = request.json["email"]
    password = request.json["password"]
    
    username_exists = User.query.filter_by(username=username).first() is not None  # Checking if username is in DB
    email_exists = Profile.query.filter_by(email=email).first() is not None  # Checking if email is in DB

    if username_exists:
        return jsonify({"error": "Username is already taken"}), 409
    
    if email_exists:
        return jsonify({"error": "Email is already registered"}), 409
    
    # Validate input
    if len(username) < 1 or len(username) > 30:
        return jsonify({"error": "Username is invalid"}), 400  # Not sure if should use 409 or 422 or 400 even
    if len(first_name) < 1 or len(first_name) > 50:
        return jsonify({"error": "Name is invalid"}), 400
    if len(last_name) < 1 or len(last_name) > 50:
        return jsonify({"error": "Name is invalid"}), 400
    # add email validation here

    # Hashing the password
    hashed_password = bcrypt.generate_password_hash(password)
    # Creating an instance of User class to add to user_accounts table, user_id will use default generation
    new_user = User(username=username, password=hashed_password)
    db.session.add(new_user)
    db.session.commit()  # Need to commit the insertion of user to then grab the same user_id it generated
    # Create an instance of the Profile class to add to user_profiles table
    new_profile=Profile(user_id = new_user.user_id, first_name=first_name, last_name=last_name, email=email)
    db.session.add(new_profile)
    db.session.commit()  # Commit profile

    # session["user_id"] = new_user.id  # Doesn't work with flask 3.0

    access_token = create_access_token(identity=new_user.username)
    refresh_token = create_refresh_token(identity=new_user.username)
    return jsonify(
        {"access_token": access_token, "refresh_token": refresh_token})
    # return jsonify({
    #     "user_id": new_user.user_id,
    #     "email": new_profile.email
    # }), 201  # Need to return status code?

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
    
    # session["user_id"] = user.id  # Doesn't work with flask 3.0
    
    access_token = create_access_token(identity=user.username)
    refresh_token = create_refresh_token(identity=user.username)
    return jsonify(
        {"access_token": access_token, "refresh_token": refresh_token})
    # return jsonify({
    #     "username": user.username
    # }), 201  # Need to return status code? Change this jsonify later


# Logout
@app.route("/logout", methods=["POST"])
def logout_user():
    response = jsonify({"message": "Logout successful"})
    unset_jwt_cookies(response)
    return response
    # session.pop("user_id")  # This won't work currently
    # return "200"

@app.route("/refresh")
class RefreshResource(Resource):
    @jwt_required(refresh=True)
    def post(self):
        current_user = get_jwt_identity()
        new_access_token = create_access_token(identity=current_user)

        return make_response(jsonify({"access_token": new_access_token}), 200)




if __name__ == "__main__":
    app.run(debug=True)