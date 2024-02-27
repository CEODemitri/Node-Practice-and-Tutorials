// Node runs on the server, not in a browser (backend javascript)
console.log('Hello World');

// uses global object not familiar window object(ex. document)
console.log(global);

// uses commonjs instead of es6

const os = require('os');
const path = require('path');
const math = require('./math')
// using only one by destructuring
const { subtract } = require('./math');

console.log(os.type());
console.log(os.version());
console.log(os.homedir());

console.log(__dirname);
console.log(__filename);

// same as using filename above
console.log(path.dirname(__filename));

// but, this will only show file
console.log(path.basename(__filename));

// only the extension
console.log(path.extname(__filename));

// parse the whole name, super cool
console.log(path.parse(__filename))

// using math from 
console.log(math.add(2, 6));
console.log(subtract(10, 8));
// console.log(multiply(22, 3));