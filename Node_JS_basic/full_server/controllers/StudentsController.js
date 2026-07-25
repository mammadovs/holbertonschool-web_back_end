import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    const dataPath = process.argv[2];

    try {
      const fields = await readDatabase(dataPath);
      let response = 'This is the list of our students';

      const sortedFields = Object.keys(fields).sort();

      sortedFields.forEach((field) => {
        const list = fields[field];
        response += `\nNumber of students in ${field}: ${list.length}. List: ${list.join(', ')}`;
      });

      res.status(200).send(response);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const dataPath = process.argv[2];
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const fields = await readDatabase(dataPath);
      const studentList = fields[major] || [];
      res.status(200).send(`List: ${studentList.join(', ')}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
