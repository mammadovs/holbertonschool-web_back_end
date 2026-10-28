#!/usr/bin/env python3
"""
This module contains a type-annotated function that calculates
the length of elements in an iterable.
"""

from typing import Iterable, List, Sequence, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    Take an iterable of sequences and return a list of tuples
    containing each sequence and its length.
    """
    return [(i, len(i)) for i in lst]
