#!/usr/bin/node

const express = require('express');
const fs = require('fs');

const app = express();
const databaseFile = process.argv[2];

const countStudents = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const fileLines = data.toString().split('\n');
      let cleanLines = [];
      
      for (let i = 0; i < fileLines.length; i++) {
        if (fileLines[i].trim() !== '') {
          cleanLines.push(fileLines[i]);
        }
      }

      if (cleanLines.length <= 1) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const studentRecords = cleanLines.slice(1);
      let output = 'Number of students: ' + studentRecords.length;

      const fieldMap = {};
      const fieldOrder = [];

      studentRecords.forEach((record) => {
        const studentData = record.split(',');
        const firstName = studentData[0];
        const field = studentData[3];

        if (firstName && field) {
          if (!fieldMap[field]) {
            fieldMap[field] = [];
            fieldOrder.push(field);
          }
          fieldMap[field].push(firstName);
        }
      });

      fieldOrder.forEach((field) => {
        const students = fieldMap[field];
        output += '\nNumber of students in ' + field + ': ' + students.length + '. List: ' + students.join(', ');
      });

      resolve(output);
    });
  });
};

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.write('This is the list of our students\n');
  countStudents(databaseFile)
    .then((report) => {
      res.end(report);
    })
    .catch((error) => {
      res.end(error.message);
    });
});

app.listen(1245);

module.exports = app;
