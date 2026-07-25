const fs = require('fs');

/**
 * Reads a CSV database file synchronously and logs statistics about students.
 * @param {string} filePath - The path to the database file.
 */
const countStudents = (filePath) => {
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length === 0) {
      console.log('Number of students: 0');
      return;
    }

    // Remove the header line
    const studentLines = lines.slice(1);
    console.log(`Number of students: ${studentLines.length}`);

    const fields = {};
    const fieldOrder = [];

    studentLines.forEach((line) => {
      const student = line.split(',');
      if (student.length >= 4) {
        const firstname = student[0];
        const field = student[3];

        if (!fields[field]) {
          fields[field] = [];
          fieldOrder.push(field);
        }
        fields[field].push(firstname);
      }
    });

    fieldOrder.forEach((field) => {
      const list = fields[field].join(', ');
      console.log(`Number of students in ${field}: ${fields[field].length}. List: ${list}`);
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
