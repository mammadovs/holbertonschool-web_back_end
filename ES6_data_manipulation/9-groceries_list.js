/**
 * Returns a map of groceries with their quantities.
 * @returns {Map} A Map containing grocery items and their amounts.
 */
function groceriesList() {
  const items = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5]
  ];

  return new Map(items);
}

export default groceriesList;
