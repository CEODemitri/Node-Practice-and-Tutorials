const fs = require('fs');
const path = require('path');


// read file synchronously
fs.readFile('./files/starter.txt', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
})

// example node functions/methods are asynchronously
// this line will print first
console.log('Testing...');

// or add encoding as a parameter and omit .toString()
fs.readFile('./files/starter.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
})

// a cleaner way to retrieve file paths using path module
console.log(__dirname);
console.log(path.join(__dirname, 'files', 'starter.txt'));
// fs.readfile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) => {
    // if (err) throw err;
    // console.log(data);
// })


// write file 
fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Yeah im here!', (err) => {
    if (err) throw err;
    console.log('Write Complete');
})