const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

// or without having to export below, can only use one from my test
// exports.multiply = (a, b) => a * b;

module.exports = { add, subtract};