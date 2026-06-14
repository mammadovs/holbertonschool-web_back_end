#!/usr/bin/env python3
"""
Hypermedia pagination module.

This module expands the Server class to support hypermedia pagination,
returning useful navigation metadata alongside the requested dataset page.
"""
import csv
import math
from typing import List, Tuple, Dict, Any


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    Determine the start and end offsets for a specific page.

    The function assumes 1-indexed pages, meaning the first page starts at 1.
    It returns a tuple with the exact boundaries needed to slice a list.
    """
    start = (page - 1) * page_size
    end = page * page_size
    return start, end


class Server:
    """
    Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        """
        Initialize the server instance with an empty dataset cache.
        """
        self.__dataset = None

    def dataset(self) -> List[List]:
        """
        Read and cache the dataset from the CSV file.

        Excludes the header row from the loaded data.
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        Retrieve a specific page of data from the baby names dataset.

        Args:
            page: Current page number, must be an integer greater than 0.
            page_size: Size of the page, must be an integer greater than 0.

        Returns:
            A list of rows corresponding to the page, or an empty list if
            the requested page falls outside the range of the dataset.
        """
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0

        data = self.dataset()
        start, end = index_range(page, page_size)

        return data[start:end]

    def get_hyper(self, page: int = 1, page_size: int = 10) -> Dict[str, Any]:
        """
        Generate hypermedia pagination metadata for the requested page.

        Args:
            page: Current page number.
            page_size: Number of items per page.

        Returns:
            A dictionary containing navigation details and the data rows.
        """
        data = self.get_page(page, page_size)
        total_rows = len(self.dataset())
        total_pages = math.ceil(total_rows / page_size)

        next_page = page + 1 if page < total_pages else None
        prev_page = page - 1 if page > 1 else None

        return {
            'page_size': len(data),
            'page': page,
            'data': data,
            'next_page': next_page,
            'prev_page': prev_page,
            'total_pages': total_pages
        }
