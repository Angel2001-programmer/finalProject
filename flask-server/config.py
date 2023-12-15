from dotenv import load_dotenv
import os
import redis
from mysqlconfig import HOST, USER, PASSWORD

load_dotenv()


class ApplicationConfig:
    SECRET_KEY = os.environ["SECRET_KEY"]
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_ECHO = True
    SQLALCHEMY_DATABASE_URI = f"mysql+pymysql://{USER}:{PASSWORD}@{HOST}:3306/introverse"  # Assuming default 3306 port for MySQL, change if not default

    # Can comment the above and uncomment below to use the SQLite DB instead
    # SQLALCHEMY_DATABASE_URI = r"sqlite:///./db.sqlite"

    # SESSION_TYPE = "redis"  # Enable the session configure, probably don't need this anymore
    # SESSION_PERMANENT = False
    # SESSION_USE_SIGNER = True
    # SESSION_REDIS = redis.from_url("redis://127.0.0.1:6379")

class TestConfig:
    SECRET_KEY = os.environ["SECRET_KEY"]
    SQLALCHEMY_ECHO = False
    SQLALCHEMY_DATABASE_URI = f"mysql+pymysql://{USER}:{PASSWORD}@{HOST}:3306/introverse"
    Testing=True