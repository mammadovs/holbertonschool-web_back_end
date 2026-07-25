#!/usr/bin/node

const express = require('express');
const fs = require('fs');

const databaseFile = process.argv[2];

const countStudents = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const lines = data.trim().split('\n').filter((line) => line.trim() !== '');
    const students = lines.slice(1);

    let result = `Number of students: ${students.length}`;
    const fields = {};

    students.forEach((student) => {
      const row = student.split(',');
      const name = row[0];
      const field = row[3];

      if (name && field) {
        if (!fields[field]) fields[field] = [];
        fields[field].push(name);
      }
    });

    for (const [field, list] of Object.entries(fields)) {
      result += `\nNumber of students in ${field}: ${list.length}. List: ${list.join(', ')}`;
    }

    resolve(result);
  });
});

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const baseText = 'This is the list of our students';
  try {
    const studentOutput = await countStudents(databaseFile);
    res.send(`${baseText}\n${studentOutput}`);
  } catch (error) {
    res.send(`${baseText}\nCannot load the database`);
  }
});

app.listen(1245);

module.exports = app;
