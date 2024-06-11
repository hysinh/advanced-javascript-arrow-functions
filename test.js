let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'maths','english', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', english: 'Joan', art: 'Simon'},
        results: {science: 93, maths: 95, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 63, maths: 79, art: 95},
    }
];

let student = {
    name: 'John',
    subjects: ['maths', 'english', 'cad'],
    teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
    results: {maths: 90, english: 75, cad: 87},
};
console.log(student.results.maths);

for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
  }


// console.log(students.results.maths);
// console.log(company.financials.incomeStatement.years);

// const object1 = {
//     a: 'somestring',
//     b: 42,
//   };
  
//   for (const [key, value] of Object.entries(object1)) {
//     console.log(`${key}: ${value}`);
//   }
  
//const averagePoints = (arr, subject) => (return statement);

//let averageMarks = averagePoints(students, 'maths');
//console.log(averageMarks);
