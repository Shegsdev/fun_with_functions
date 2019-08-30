/**

* Write three binary functions
* "add", "sub", and "mul", that take
* two numbers and return their
* sum, difference, and product.

* > add(3, 4)   // 7
* > sub(3, 4)   // -1
* > mul(3, 4)   // 12

*/

// Import 'log' function from helpers.js file
const log = require('../helpers').log;

function add(first, second) {
  return first + second;
}

function sub(first, second) {
  return first - second;
}

function mul(first, second) {
  return first * second;
}

// log(add(3, 4));
// log(sub(3, 4));
// log(mul(3, 4));

// Export all functions in other to use them in other files
module.exports = {
  add,
  sub,
  mul,
}
