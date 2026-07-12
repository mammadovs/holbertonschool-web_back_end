/**
 * Cleans a set by filtering values that start with a specific string
 * and returning the rest of the string separated by hyphens.
 * @param {Set} set - The set of strings.
 * @param {String} startString - The string to check for.
 * @returns {String} A string of modified values separated by -.
 */
function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }

  const parts = [];

  for (const value of set) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      parts.push(value.slice(startString.length));
    }
  }

  return parts.join('-');
}

export default cleanSet;
