#!/usr/bin/env python3

# Standard library imports
from random import randint, choice

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, Feedback, User, Comment, Category

if __name__ == "__main__":
    fake = Faker()
    with app.app_context():
        print("Starting seed...")
        db.create_all()

        fake = Faker()

        Feedback.query.delete()
        User.query.delete()
        Comment.query.delete()
        Category.query.delete()

        status = ["Planned", "In-Progress", "Live"]
        sample_categories = ["UI", "UX", "Enhancement", "Bug", "Feature"]
        categories = []
        users = []

        # Generate Random Users
        for u in range(10):
            user = User(
                first_name=fake.first_name(),
                last_name=fake.last_name(),
                username=fake.user_name(),
                role=fake.random_element(
                    elements=(
                        "admin",
                        "user",
                    )
                ),
                created_at=fake.date_time_this_year(),
            )
            users.append(user)

        db.session.add_all(users)
        db.session.commit()

        # Create Categories Records
        for c in sample_categories:
            category = Category(type=c)
            categories.append(category)

        db.session.add_all(categories)
        db.session.commit()

        # Generate Random Feedbacks
        for f in range(5):
            random_status = choice(status)
            random_category = choice(categories)
            random_user = choice(users)
            feedback = Feedback(
                title=fake.unique.text(max_nb_chars=20).title(),
                description=fake.unique.paragraph(nb_sentences=3),
                upvote=randint(1, len(users)),
                status=random_status,
                # category_id=random_category.id,
                # user_id=random_user.id
            )
            feedback.category = random_category
            feedback.user = random_user
            db.session.add(feedback)
            db.session.commit()

            # Create random comments for each feedback
            for _ in range(randint(1, 8)):
                comment = Comment(
                    description=fake.sentence(),
                    # feedback_id=feedback.id
                )
                comment.feedback = feedback
                comment.user = choice(users)
                db.session.add(comment)
                db.session.commit()
