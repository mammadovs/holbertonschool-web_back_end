import fs from 'fs';

const readDatabase = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const lines = data.toString().split('\n');
    const cleanLines = lines.filter((line) => line.trim() !== '');

    const students = cleanLines.slice(1);
    const fields = {};

    students.forEach((student) => {
      const row = student.split(',');
      const name = row[0];
      const field = row[3];

      if (name && field) {
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(name);
      }
    });

    resolve(fields);
  });
});

export default readDatabase;
