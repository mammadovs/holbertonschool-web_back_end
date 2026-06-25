export default function appendToEachArrayValue(array, appendString) {
  for (const [idx, value] of array.entries()) {
    /* eslint-disable no-param-reassign */
    array[idx] = appendString + value;
    /* eslint-enable no-param-reassign */
  }

  return array;
}
