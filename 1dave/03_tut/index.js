const { format } = require('date-fns');
// destructuring with CommonJS
const { v4: uuid } = require('uuid');
// compared too es6 import
// import v4 as uuid;


console.log(format(new Date(), 'yyyy-MM\tHH:mm:ss'));
console.log(format(new Date(), 'MM-dd\tHH:mm:ss'));
console.log(format(new Date(), 'ddMM\tHH:mm:ss'));
// only adding this line to test nodemon
console.log("Hello")

console.log(uuid());
// prints a new id every refresh


// dev-dependecy
// npm i package -D

