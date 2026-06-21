#!/usr/bin/env python3
"""
Module that contains the function list_all
"""


def list_all(mongo_collection):
    """
    Lists all documents in a collection.
    Returns an empty list if no documents are found.
    """
    if mongo_collection is None:
        return []
    return list(mongo_collection.find())

