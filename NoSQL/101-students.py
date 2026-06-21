#!/usr/bin/env python3
"""
Module to find top students based on average score
"""


def top_students(mongo_collection):
    """
    Returns all students sorted by average score.
    The average score is included in each document with the key 'averageScore'.
    """
    pipeline = [
        {
            "$project": {
                "name": "$name",
                "topics": "$topics",
                "averageScore": {"$avg": "$topics.score"}
            }
        },
        {
            "$sort": {"averageScore": -1}
        }
    ]
    return list(mongo_collection.aggregate(pipeline))

