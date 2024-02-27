const fs = require('fs');
const path = require('path');

fs.readFile('starter.txt', (err, data) => {
    // add 'utf8' after starter.txt above to not need toString method down below
    if (err) throw err;
    console.log(data);
    console.log(data.toString());
})

// displays the async function after this code. will happen with async functions with node
console.log('Hello...')

// example of how to destructure the readfile block above
// path name, content in file, callback
fs.writeFile(path.join(__dirname, 'reply.txt'), 'Nice to meet you.', (err) => {
    if (err) throw err;
    console.log('Write Complete');
})

fs.appendFile(path.join(__dirname, 'test.txt'), 'Nice to meet you.', (err) => {
    if (err) throw err;
    console.log('Write Complete');
})