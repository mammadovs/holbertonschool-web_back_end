export default function createIteratorObject(report) {
  const allEmployees = [];

  for (const department of Object.values(report.allEmployees)) {
    allEmployees.push(...department);
  }

  return {
    * [Symbol.iterator]() {
      for (const employee of allEmployees) {
        yield employee;
      }
    },
  };
}
