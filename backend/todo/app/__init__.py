from flask import Flask
from config import Config 
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS

app = Flask(__name__)
app.config.from_object(Config)
db = SQLAlchemy(app)
migrate = Migrate(app, db)
cors = CORS(app, resources={r"/api/*": {"origins": "http://127.0.0.1:3000"}})

from app.api import bp as api_bp
app.register_blueprint(api_bp, url_prefix='/api')

from app import models

