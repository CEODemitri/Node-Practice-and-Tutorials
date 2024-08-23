const fs = require('fs');
const path = require('path');
const fsPromises = require('fs').promises;


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

// append to file
fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), ' And im here too.', (err) => {
    if (err) throw err;
    console.log('Append Complete');
})

const fileOps = async () => {
    try {
        await fsPromises.writeFile(path.join(__dirname, 'files', 'boogie.txt'), 'Yeah im here!');
        await fsPromises.appendFile(path.join(__dirname, 'files', 'boogie.txt'), ' And im here too.');
        await fsPromises.rename(path.join(__dirname, 'files', 'boogie.txt'), path.join(__dirname, 'files', 'newBoogie.txt'));
        console.log('Write and Append Complete');
    } catch (err) {
        console.error(err);
    }
}

fileOps();

// delete a file using promise
const deleteOps = async () => {
    try {
        await fsPromises.appendFile(path.join(__dirname, 'files', 'tester.txt'), 'Big Dawg');
        console.log('Delete Created')
        await fsPromises.unlink(path.join(__dirname, 'files', 'tester.txt'));
        console.log('Delete file Complete');
    } catch (err) {
        console.error(err);
    }
};

deleteOps();
