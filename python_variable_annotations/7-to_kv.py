#!/usr/bin/env python3
"""
This module contains a type-annotated function that returns a tuple
consisting of a string and the square of an int or float.
"""

from typing import Tuple, Union


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Take a string k and an int or float v, and return a tuple
    with k and the square of v as a float.
    """
    return (k, float(v ** 2))
