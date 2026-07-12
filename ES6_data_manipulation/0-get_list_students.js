/**
 * Retrieves a list of students.
 * @returns {Array} An array of student objects.
 */
function getListStudents() {
  const students = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' }
  ];

  return students;
}

export default getListStudents;
