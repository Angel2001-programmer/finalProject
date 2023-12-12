from flask import Flask, request, jsonify, session
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from flask_session import Session  # Need to find something to replace this
from config import ApplicationConfig


# Separated out routes so file doesn't get too big, this file just sets up the app

db = SQLAlchemy()
bcrypt = Bcrypt()
cors = CORS()

def create_app():
    app = Flask(__name__)
    app.config.from_object(ApplicationConfig)  # Need to look into how to use MySQL instead of .db, 
    db.init_app(app)
    bcrypt.init_app(app)
    cors.init_app(app, supports_credentials=True)
# server_session = Session(app) # By default session would be client side without this server session, but since enabled it will always be stored on server side
    
    return app

