#!/usr/bin/env python3
"""
This module contains an asynchronous comprehension coroutine
that collects 10 random numbers from async_generator.
"""

from typing import List

async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """
    Collect 10 random numbers using an async comprehension
    over async_generator and return them.
    """
    return [i async for i in async_generator()]
