# This file will create the tables if they do not already exist

def deploy():
    from app import create_app, db
    from models.user_models import User, Profile
    from models.content_models import Books, Anime, Games
    app = create_app()
    app.app_context().push()

    # Create tables
    db.create_all()

deploy()
