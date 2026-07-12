/**
 * Filters students by a specific location.
 * @param {Array} students - The array of student objects.
 * @param {String} city - The city to filter by.
 * @returns {Array} An array of students located in the specified city.
 */
function getStudentsByLocation(students, city) {
  if (!Array.isArray(students)) {
    return [];
  }

  const filteredStudents = students.filter((student) => student.location === city);
  return filteredStudents;
}

export default getStudentsByLocation;
