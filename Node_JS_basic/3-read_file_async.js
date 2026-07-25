const fs = require('fs');

const countStudents = (dataPath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const fileLines = data.toString().split('\n');
      const cleanLines = filelines.filter((line) => line.trim() !== '');

      if (cleanLines.length <= 1) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const studentRecords = cleanLines.slice(1);
      console.log(`Number of students: ${studentRecords.length}`);

      const fieldMap = {};
      const fieldOrder = [];

      studentRecords.forEach((record) => {
        const studentData = record.split(',');
        const firstName = studentData[0];
        const field = studentData[3];

        if (!fieldMap[field]) {
          fieldMap[field] = [];
          fieldOrder.push(field);
        }
        fieldMap[field].push(firstName);
      });

      fieldOrder.forEach((field) => {
        const students = fieldMap[field];
        console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
      });

      resolve();
    });
  });
};

module.exports = countStudents;
