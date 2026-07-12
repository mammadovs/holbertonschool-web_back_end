/**
 * A WeakMap instance to track the API call counts for different endpoints.
 */
export const weakMap = new WeakMap();

/**
 * Tracks the number of times an endpoint is called and throws an error
 * if the number of queries reaches or exceeds 5.
 * @param {Object} endpoint - The endpoint object containing protocol and name.
 * @throws {Error} Throws an error if the endpoint load is high.
 */
export function queryAPI(endpoint) {
  let count = weakMap.get(endpoint) || 0;

  count += 1;

  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }

  weakMap.set(endpoint, count);
}
