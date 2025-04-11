#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, make_response
from flask_restful import Resource

# Local imports
from config import app, db, api

# Add your model imports

from models import Category, Feedback, User, Comment

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
@app.route("/feedbacks", methods=["POST"])
def add_feedback():
    try:
        data = request.get_json()
        print(f"Form Data:${data}")
        # Extract data from the request
        feedback_title = data.get("feedback-title")
        feedback_description = data.get("feedback-detail")
        feedback_category = data.get("feedback-category")

        if not feedback_title or not feedback_description:
            return make_response({"error": "Title and description are required"}, 400)

        new_feedback = Feedback(
            title=feedback_title,
            description=feedback_description,
            category_id=feedback_category,
            upvote=0,
            status="Planned",
        )
        # new_feedback.category_id = feedback_category

        db.session.add(new_feedback)
        db.session.commit()

        return make_response(new_feedback.to_dict(), 201)

    except Exception as e:
        return make_response({"error": str(e)}, 500)


# Update a specific feedback
@app.route("/feedbacks/<int:id>", methods=["PUT"])
def update_feedback(id):
    try:
        data = request.get_json()

        feedback = Feedback.query.get(id)

        if not feedback:
            return make_response({"error": "Feedback not found"}, 404)

        feedback_title = data.get("feedback-title")
        feedback_description = data.get("feedback-detail")
        feedback_category = data.get("feedback-category")
        feedback_status = data.get("feedback-status")

        if not feedback_title or not feedback_description:
            return make_response({"error": "Title and description are required"}, 400)

        feedback.title = feedback_title
        feedback.description = feedback_description
        feedback.category_id = feedback_category
        feedback.status = feedback_status if feedback_status else feedback.status

        db.session.add(feedback)
        db.session.commit()

        return make_response(feedback.to_dict(), 200)

    except Exception as e:
        return make_response({"error": str(e)}, 500)


# Delete a feedback
@app.route("/feedbacks/<int:id>", methods=["DELETE"])
def delete_feedback(id):
    try:
        feedback = Feedback.query.get(id)
        if not feedback:
            return make_response({"error": "Feedback not found"}, 404)

        db.session.delete(feedback)
        db.session.commit()

        return make_response({"message": "Feedback deleted successfully"}, 200)

    except Exception as e:
        return make_response({"error": str(e)}, 500)


# Add a new Comment
@app.route("/comments", methods=["POST"])
def add_comment():
    try:
        data = request.get_json()
        print(f"Comment Data:{data}")

        comment_description = data.get("description")
        feedback_id = data.get("feedback_id")
        user_id = data.get("user_id")

        if not comment_description:
            return make_response({"error": "Comment description is required"}, 400)
        if not feedback_id or not user_id:
            return make_response({"error": "Feedback ID and User ID are required"}, 400)

        new_comment = Comment(
            user_id=user_id,
            feedback_id=feedback_id,
            description=comment_description,
        )

        db.session.add(new_comment)
        db.session.commit()

        return make_response(new_comment.to_dict(), 201)

    except Exception as e:
        return make_response({"error": str(e)}, 500)


# Get a list of users
@app.route("/users", methods=["GET"])
def all_users():
    if request.method == "GET":
        users = User.query.all()
        user_list = [u.to_dict() for u in users]
        response = make_response(user_list, 200)
        return response


if __name__ == "__main__":
    app.run(port=5555, debug=True)
