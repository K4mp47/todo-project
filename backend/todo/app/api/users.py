from flask import jsonify, request, url_for
from app.api import bp
from app.models import User
from app.api.errors import bad_request
from app import db
from flask_cors import cross_origin

@bp.route('/users/<int:id>', methods=['GET'])
def get_user(id):
    return jsonify(User.query.get_or_404(id).to_dict())

@bp.route('/users', methods=['GET'])
@cross_origin(origin='http://127.0.0.1:3000')
def get_users():
    page = request.args.get('page', 1, type=int)
    per_page = min(request.args.get('per_page', 10, type=int), 100)
    data = User.to_collection_dict(User.query, page, per_page, 'api.get_users')
    return jsonify(data)

@bp.route('/users', methods=['POST'])
def create_user():
    data = request.get_json() or {}
    if 'email'  not in data or 'password' not in data or 'username' not in data:
        return bad_request('must include username, email and password')
    if User.query.filter_by(username=data['username']).first():
        return bad_request('username already in use')
    if User.query.filter_by(email=data['email']).first():
        return bad_request('email already in use')

    user = User()
    user.from_dict(data, new_user=True)
    db.session.add(user)
    db.session.commit()

    response = jsonify(user.to_dict())
    response.status_code = 201
    response.headers['Location'] = url_for('api.get_user', id=user.id)

    return response 

@bp.route('/users/<int:id>', methods=['DELETE']) 
def delete_user(id):
    user = User.query.get_or_404(id)
    response = jsonify(user.to_dict())
    response.status_code = 204 

    db.session.delete(user)
    db.session.commit()
    
    return response
