from flask import Flask, request, jsonify, session
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from flask_session import Session  # Need to find something to replace this
from config import ApplicationConfig
from flask_jwt_extended import JWTManager


# Separated out routes so file doesn't get too big, this file just sets up the app

db = SQLAlchemy()
bcrypt = Bcrypt()
cors = CORS()
jwt = JWTManager()

def create_app(config):  # Changed function to take in a config so can unit test with a test config
    app = Flask(__name__)
    app.config.from_object(ApplicationConfig)
    db.init_app(app)
    bcrypt.init_app(app)
    cors.init_app(app, supports_credentials=True)
    jwt.init_app(app)
    
# server_session = Session(app) # By default session would be client side without this server session, but since enabled it will always be stored on server side
    
    return app

