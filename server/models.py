from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.sql import func

from config import db


class User(db.Model, SerializerMixin):
    __tablename__ = "users"

    serialize_rules = ("-feedbacks",)

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String, nullable=False)
    last_name = db.Column(db.String, nullable=False)
    username = db.Column(db.String, nullable=False)
    role = db.Column(db.String)
    created_at = db.Column(db.DateTime(timezone=True), server_default=func.now())

    feedbacks = db.relationship("Feedback", backref=db.backref("user"))
    comments = db.relationship("Comment", backref=db.backref("user"))

    def __init__(self, first_name, last_name, username, role, created_at=None):
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

    serialize_rules = (
        "-user.feedbacks",
        "-user.comments",
        "-comments.feedback",
        "-comments.user",
        "-category.feedbacks",
    )

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    description = db.Column(db.String, nullable=False)
    upvote = db.Column(db.Integer)
    status = db.Column(db.String)

    comments = db.relationship("Comment", backref=db.backref("feedback"))

    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    category_id = db.Column(db.Integer, db.ForeignKey("categories.id"))

    # def __init__(self, title, description, upvote, status):
    #     self.title = title
    #     self.description = description
    #     self.upvote = upvote
    #     self.status = status

    def __repr__(self):
        return f"""
                id: {self.id}
                title: {self.title}
                description: {self.description}
                upvote: {self.upvote}
        """


class Comment(db.Model, SerializerMixin):
    __tablename__ = "comments"

    serialize_rules = ("-feedback",)

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


class Category(db.Model, SerializerMixin):
    __tablename__ = "categories"

    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String)

    feedbacks = db.relationship("Feedback", backref=db.backref("category"))

    def __repr__(self):
        return f"""
            id: {self.id}
            type: {self.type}
        """
