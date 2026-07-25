import fs from 'fs';

const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.toString().split('\n');
      let cleanLines = [];
      
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].trim() !== '') {
          cleanLines.push(lines[i]);
        }
      }

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
};

export default readDatabase;
