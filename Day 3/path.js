const path = require('path');

// PATH MODULE 
// Path module provides utilities for working with file and directory paths
// It can be used to handle and transform file paths
/* 
console.log("FILENAME 📂:", __filename);
console.log("DIRNAME:📂", __dirname);

console.log("BASE NAME:", path.basename(__filename)); */


// School Management System
// Let's say we are building a school management system and we need to manage file paths for students records, teacher records, and class schedules.

// *1. Joining Paths
const studentRecordsPath = path.join(__dirname, 'school', 'students', 'records');


console.log("Student Records Path:", studentRecordsPath);


const parseDataPath = path.join(studentRecordsPath);
const resolveDataPath = path.resolve(studentRecordsPath);
const extname = path.extname(studentRecordsPath);
const baseName = path.basename(studentRecordsPath);
const dirName = path.dirname(studentRecordsPath);
const parseData = path.parse(studentRecordsPath);



console.log({
    parseDataPath,
    resolveDataPath,
    extname,
    baseName,
    dirName,
    parseData

})