#!/usr/bin/env python3
"""
Pagination helper module.

This module contains a utility function to compute index ranges
for data pagination based on page numbers and page sizes.
"""
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    Determine the start and end offsets for a specific page.

    The function assumes 1-indexed pages, meaning the first page starts at 1.
    It returns a tuple with the exact boundaries needed to slice a list.
    """
    start = (page - 1) * page_size
    end = page * page_size
    return start, end
