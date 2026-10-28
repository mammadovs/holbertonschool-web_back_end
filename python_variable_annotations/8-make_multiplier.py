#!/usr/bin/env python3
"""
This module contains a type-annotated
function that returns a multiplier function.
"""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Take a float multiplier and return a function
    that multiplies a float by multiplier.
    """
    def multiply(n: float) -> float:
        return n * multiplier
    return multiply
