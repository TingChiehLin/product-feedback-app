#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import jsonify, request, make_response
from flask_restful import Resource

# Local imports
from config import app, db, api

# Add your model imports

from models import Feedback

# Views here!


## Get path
class Home(Resource):
    def get(self):
        response_dict = {"message": "Welcome to product feedback RESTful API"}

        response = make_response(response_dict, 200)

        return response


api.add_resource(Home, "/")


# class FeedbackResources(Resource):
#     def get(self):
#         feedbacks = Feedback.query.all()
#         feedback_list = [f.to_dict() for f in feedbacks]
#         response = make_response(jsonify(feedback_list), 200)
#         return response

# api.add_resource(Feedback, "/feedbacks")


@app.route("/feedbacks", methods=["GET"])
def all_feedbacks():
    if request.method == "GET":
        feedbacks = Feedback.query.all()
        feedback_list = [f.to_dict() for f in feedbacks]
        response = make_response(feedback_list, 200)
        return response


if __name__ == "__main__":
    app.run(port=5555, debug=True)
