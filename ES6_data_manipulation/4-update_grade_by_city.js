/**
 * Updates the grades of students in a specific city.
 * @param {Array} students - The array of student objects.
 * @param {String} city - The city to filter by.
 * @param {Array} newGrades - The array of grade objects.
 * @returns {Array} An array of updated student objects.
 */
function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students)) {
    return [];
  }

  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
      
      return {
        ...student,
        grade: gradeObj ? gradeObj.grade : 'N/A'
      };
    });
}

export default updateStudentGradeByCity;
