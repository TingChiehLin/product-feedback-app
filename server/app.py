#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, make_response
from flask_restful import Resource

# Local imports
from config import app, db, api

# Add your model imports

from models import Category, Feedback

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


# Get all feedbacks from the database
@app.route("/feedbacks", methods=["GET"])
def all_feedbacks():
    if request.method == "GET":
        feedbacks = Feedback.query.all()
        feedback_list = [f.to_dict() for f in feedbacks]
        response = make_response(feedback_list, 200)
        return response


# Fet all categories from the db
@app.route("/categories", methods=["GET"])
def all_categories():
    if request.method == "GET":
        categories = Category.query.all()
        category_list = [c.to_dict() for c in categories]
        response = make_response(category_list, 200)
        return response


# Add a new feedback
@app.route("/add-new-feedback", methods=["POST"])
def add_feedback():
    try:
        data = request.get_json()
        # Extract data from the request
        title = data.get("feedback-title")
        description = data.get("feedback-detail")
        category = data.get("category")
        upvote = 0
        status = "Planned"

        if not title or not description:
            return make_response({"error": "Title and description are required"}, 400)

        new_feedback = Feedback(
            title=title,
            description=description,
            category_id=category,
            upvote=upvote,
            status=status,
        )
        # new_feedback.category = Category.query.filter(id)
        print(new_feedback)
        db.session.add(new_feedback)
        db.session.commit()

        return make_response(new_feedback.to_dict(), 201)

    except Exception as e:
        return make_response({"error": str(e)}, 500)


if __name__ == "__main__":
    app.run(port=5555, debug=True)
