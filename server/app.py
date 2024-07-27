#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, make_response
from flask_restful import Resource

# Local imports
from config import app, db, api

# Add your model imports


# Views here!


class Home(Resource):
    def get(self):
        response_dict = {"message": "Welcome to product feedback RESTful API"}

        response = make_response(response_dict, 200)

        return response


api.add_resource(Home, "/")


class Feedback:
    def get(self):
        response_dict_list = [n.to_dict() for n in Feedback.query.all()]

        response = make_response(response_dict_list, 200)

        return response


# @app.route("/")
# def index():
#     return "<h1>Project Server</h1>"


if __name__ == "__main__":
    app.run(port=5555, debug=True)
