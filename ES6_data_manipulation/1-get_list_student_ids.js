/**
 * Gets an array of ids from a list of student objects.
 * @param {Array} students - The array of student objects.
 * @returns {Array} An array of ids or an empty array if input is invalid.
 */
function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }

  const ids = students.map((student) => student.id);
  return ids;
}

export default getListStudentIds;
