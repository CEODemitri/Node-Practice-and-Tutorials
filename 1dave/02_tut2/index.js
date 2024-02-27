const fs = require('fs');
const path = require('path');

// fs.readFile('./files/starter.txt', 'utf-8', (err, data) => {
fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data)
})

console.log('Hello...');

fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Wasser bitte', (err) => {
    if (err) throw err;
    console.log('Write Complete');

    // to be one step ahead of javascript async function
    fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '. Wein Bitte', (err) => {
        if (err) throw err;
        console.log('Append Complete');

        fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'newReply.txt'), (err) => {
            if (err) throw err;
            console.log('Rename Complete')
        })
    })

})

fs.appendFile(path.join(__dirname, 'files', 'test.txt'), 'Eschunlingdug', (err, data) => {
    if (err) throw err;
    console.log('Append Complete')
})

process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
})
