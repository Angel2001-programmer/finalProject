# This file will now be running everything?
from flask import current_app, jsonify, request, session
from app import create_app, db, bcrypt
from models.user_models import User, Profile
from models.content_models import Books, Anime, Games

# Create an application instance
app = create_app()

# Defining routes

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
    # Creating an instance of User class to add to user_accounts table, user_id will use default generation
    new_user = User(username=username, first_name=first_name, last_name=last_name, email=email, password=hashed_password)
    db.session.add(new_user)
    db.session.commit()
    # Create an instance of the Profile class to add to user_profiles table, all other fields will be null, think need to declare first because it is FK in other table
    new_profile=Profile(username=username)
    db.session.add(new_profile)


    db.session.commit()

    # session["user_id"] = new_user.id  # Doesn't work with flask 3.0

    return jsonify({
        "user_id": new_user.user_id,
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
    
    # session["user_id"] = user.id  # Doesn't work with flask 3.0
    
    # return jsonify({
    #     "id": user.id,
    #     "email": user.username
    # })


# Logout
@app.route("/logout")
def logout_user():
    session.pop("user_id")  # This won't work currently
    return "200"




if __name__ == "__main__":
    app.run(debug=True)