const adder = (a, b) => a + b;
const subtracter = (a, b) => a - b;
const multiplier = (a, b) => a * b;
const divider = (a, b) => a / b;
const exponent = (a, b) => a**b;
// this way is more efficient but would have to omit module.exports line 9 and change all precious to match
// exports.exponent = (a, b) => a ** b;

// generic method to export functions
module.exports = { adder, subtracter, multiplier, divider, exponent };


