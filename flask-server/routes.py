# This file runs the server
from flask import current_app, jsonify, request
from app import create_app, db, bcrypt
from models.user_models import User, Profile
from models.content_models import Books, Anime, Games
from flask_jwt_extended import create_access_token, create_refresh_token, unset_jwt_cookies, get_jwt_identity, jwt_required
from flask_restx import Resource
from email_validator import validate_email, EmailNotValidError

# Create an application instance
app = create_app()  # By default uses application config

# Defining routes

# Might use this function to check emails
def check_email(email):
    try:
        v = validate_email(email)
        email = v["email"]
        return True
    except EmailNotValidError as e:
        print(str(e))
        return False
    

@app.route("/")
def home():
    return {"message": "hello"}


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
        return jsonify({"error": "Username is invalid"}), 400
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

    # Creates an access and refresh token which is needed at the front end
    access_token = create_access_token(identity=new_user.username)
    refresh_token = create_refresh_token(identity=new_user.username)
    return jsonify(
        {"access_token": access_token, "refresh_token": refresh_token})


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
    # Unset the JWT cookie
    unset_jwt_cookies(response)
    return response

#Retrieve User Data
@app.route("/getUserData", methods=["GET"])
# def getUserData():


#Retrieve Posts Data
@app.route("/messages", methods=["PUT", "GET"])


@app.route("/refresh")
class RefreshResource(Resource):
    @jwt_required(refresh=True)
    def post(self):
        current_user = get_jwt_identity()
        new_access_token = create_access_token(identity=current_user)

        return make_response(jsonify({"access_token": new_access_token}), 200)

if __name__ == "__main__":
    app.run(debug=True)