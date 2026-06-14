#!/usr/bin/env python3
"""
Deletion-resilient hypermedia pagination module.

This module provides a Server class capable of paginating data smoothly
even if records are deleted between subsequent user requests.
"""
import csv
import math
from typing import List, Dict, Any


class Server:
    """
    Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        """
        Initialize the server instance with empty caches.
        """
        self.__dataset = None
        self.__indexed_dataset = None

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

    def indexed_dataset(self) -> Dict[int, List]:
        """
        Dataset indexed by sorting position, starting at 0.
        """
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(
        self, index: int = None, page_size: int = 10
    ) -> Dict[str, Any]:
        """
        Retrieve a page of data starting from a specific index.

        Resilient to data gaps caused by rows being removed from the dataset.

        Args:
            index: The initial position to start fetching data.
            page_size: Total number of valid rows to collect.

        Returns:
            A dictionary with the current index, next index, actual page size,
            and the collected rows of data.
        """
        indexed_data = self.indexed_dataset()
        total_items = len(indexed_data)

        assert index is not None and 0 <= index < total_items
        assert isinstance(page_size, int) and page_size > 0

        data = []
        current_index = index

        while len(data) < page_size and current_index < total_items:
            item = indexed_data.get(current_index)
            if item is not None:
                data.append(item)
            current_index += 1

        return {
            'index': index,
            'data': data,
            'page_size': len(data),
            'next_index': current_index
        }
