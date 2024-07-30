from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.sql import func

from config import db


# Models go here!
class User(db.Model, SerializerMixin):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String, nullable=False)
    last_name = db.Column(db.String, nullable=False)
    username = db.Column(db.String, nullable=False)
    role = db.Column(db.String)
    created_at = db.Column(db.DateTime(timezone=True), server_default=func.now())

    feedbacks = db.relationship("Feedback", backref=db.backref("user"))
    comments = db.relationship("Comment", backref=db.backref("user"))

    def __init__(self, first_name, last_name, username, role, created_at):
        self.first_name = first_name
        self.last_name = last_name
        self.username = username
        self.role = role
        self.created_at = created_at

    def __repr__(self):
        return f"""
            id: {self.id}
            first_name: {self.first_name}
            last_name: {self.last_name}
            username: {self.username}
            role: {self.role}
            created_at: {self.created_at}
        """


class Feedback(db.Model, SerializerMixin):
    __tablename__ = "feedbacks"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    description = db.Column(db.String, nullable=False)
    upvote = db.Column(db.Integer)
    status = db.Column(db.String)

    comments = db.relationship("Comment", backref=db.backref("feedback"))

    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))

    def __init__(self, title, description, upvote):
        self.title = title
        self.description = description
        self.upvote = upvote

    def __repr__(self):
        return f"""
                id: {self.id}
                title: {self.title}
                description: {self.description}
                upvote: {self.upvote}
        """


class Comment(db.Model, SerializerMixin):
    __tablename__ = "comments"

    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String)

    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    feedback_id = db.Column(db.Integer, db.ForeignKey("feedbacks.id"))

    def __init__(self, description):
        self.description = description

    def __repr__(self):
        return f"""
            id: {self.id}
            title: {self.title}
        """


# class Status(db.Model, SerializerMixin):
#     __tablename__ = "status"

#     id = db.Column(db.Integer, primary_key=True)
#     status = db.Column(db.String)

#     def __repr__(self):
#         return f"""
#             id: {self.id}
#             status: {self.status}
#         """


class Category(db.Model, SerializerMixin):
    __tablename__ = "categories"

    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String)

    def __repr__(self):
        return f"""
            id: {self.id}
            type: {self.type}
        """
