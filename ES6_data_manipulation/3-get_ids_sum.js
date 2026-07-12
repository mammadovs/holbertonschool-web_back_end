/**
 * Calculates the sum of all student ids.
 * @param {Array} students - The array of student objects.
 * @returns {Number} The sum of all student ids.
 */
function getStudentIdsSum(students) {
  if (!Array.isArray(students)) {
    return 0;
  }

  const sum = students.reduce((accumulator, student) => accumulator + student.id, 0);
  return sum;
}

export default getStudentIdsSum;
