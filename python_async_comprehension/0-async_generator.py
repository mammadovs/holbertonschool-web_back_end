#!/usr/bin/env python3
"""
This module contains an asynchronous generator coroutine
that yields 10 random numbers with a 1-second delay.
"""

import asyncio
import random
from typing import AsyncGenerator


async def async_generator() -> AsyncGenerator[float, None]:
    """
    Loop 10 times, asynchronously wait 1 second each time,
    and yield a random number between 0 and 10.
    """
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
