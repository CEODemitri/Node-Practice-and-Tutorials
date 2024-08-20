// not a framework or library, runs on the server

// console is output in terminal not the browser like vanilla Javascript
console.log('Hello Kosmos');

// use global object instead of window/document object in vanilla javascript
// global is much smaller than window
console.log(global)

// Has COMMON Core modules
// to use the common modules, use commonjs instead of es6

const os = require('os');
const path = require('path');
const math = require('./math');

// destructuing 
const { subtracter } = require('./math');


console.log(os.type());
console.log(os.version());
console.log(os.homedir());
console.log(os.uptime());

console.log(__dirname);
console.log(__filename);
// below is same as line 21
console.log(path.dirname(__filename));

console.log(path.parse(__filename));

// my custom module 'math'
console.log(math.adder(3, 5));
console.log(math.multiplier(2, 3) + " multiplier");
console.log(math.divider(10, 2) + " divider");

console.log(subtracter(10, 5) + " subtracted");

console.log(math.exponent(2, 3) + " exponent");