/**
 * Updates the quantity to 100 for all items in the map with an initial quantity of 1.
 * @param {Map} map - The map of grocery items to update.
 * @returns {Map} The updated map.
 */
function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [key, value] of map) {
    if (value === 1) {
      map.set(key, 100);
    }
  }

  return map;
}

export default updateUniqueItems;
