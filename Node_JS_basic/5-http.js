#!/usr/bin/node

const http = require('http');
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

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    try {
      const output = await countStudents(databaseFile);
      res.end(output);
    } catch (error) {
      res.end('Cannot load the database');
    }
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(1245);

module.exports = app;
