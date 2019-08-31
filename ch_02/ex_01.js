/**

* Write a function "curry"
* that takes a binary function, and
* an argument, and returns a
* function that can take a
* second argument.

* NB: A binary function is a function
*     that takes in two arguments.

* > const add3 = curry(add, 3); // "add" function from ch_01
* > add3(3)(4)          // 7

* > curry(mul, 5)(6)      // 30 ("mul" function from ch_01)

*/

const log = require('../helpers').log;
const add = require('../ch_01/ex_01').add;
const mul = require('../ch_01/ex_01').mul;
const liftf = require('../ch_01/ex_04').liftf;

/**
* @params (func, int)
* @return func
*/
function curry(binary, arg) {
  return function(next) {
    return binary(arg, next);
  }
}

function curry2(binary, arg) {
  return liftf(binary)(arg); // Refer to ex_04 in ch_01 to see the implementation of liftf
}

// NB: The process of taking a function with multiple arguments
// and turning it into a multiple functions that take a single
// argument is called CURRYING (Named after mathematician - Haskell Curry)


let add3 = curry(add, 3);
let add6 = curry2(add, 6);
  
// log(add3(4));

module.exports = {
  curry,
}
