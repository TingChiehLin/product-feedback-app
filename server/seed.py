#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc, random

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, Feedback, User, Comment, Category

if __name__ == "__main__":
    fake = Faker()
    with app.app_context():
        print("Starting seed...")

        fake = Faker()

        Feedback.query.delete()
        User.query.delete()
        Comment.query.delete()
        Category.query.delete()

        feedbacks = []
        status = ["Planned", "In-Progress", "Live"]
        categories = ["UI", "UX", "Enhancement", "Bug", "Feature"]

        # Generate Random Feedbacks
        for f in range(5):
            random_status = random.choice(status)
            random_categpry = random.choice(categories)
            feedback = Feedback(
                title=fake.unique.text(max_nb_chars=20).title(),
                description=fake.unique.paragraph(nb_sentences=3),
                upvote=random.randint(1, 1000),
                status=random_status,
                # commentNum=random.randint(0, 20),
                # feedback.category = random_category
                # How to add comment into feedback
            )

            # Generate rnadom 5 categoies
            # Assing to feedback
            feedback.category_id = random_categpry
            feedbacks.append(feedback)

        db.session.add_all(feedbacks)
        db.session.commit()

    # ?? How to do this with no any relationship
    # tagName: "Enhancement",
    # commentNum: 2,

    # Generate Random Users
