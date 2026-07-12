/**
 * Checks if all elements from an array exist within a set.
 * @param {Set} set - The set to check against.
 * @param {Array} array - The array of elements to find.
 * @returns {Boolean} True if all elements exist in the set, false otherwise.
 */
function hasValuesFromArray(set, array) {
  return array.every((element) => set.has(element));
}

export default hasValuesFromArray;
