/**

* Write a function "twice"
* that takes a binary function and
* and returns a unary function
* that passes its argument to the
* binary function twice.

* NB: A binary function is a function
*     that takes in two arguments.

* > add(11, 11)         // 22
* > const doubl = twice(add);
* > doubl(11)           // 22

* > const mul = twice(mul);
* > square(11)          // 121

*/

const log = require('../helpers').log;
const mul = require('../ch_01/ex_01').mul;


/**
* @param func
* @return func
*/
function twice(binary) {
  return function(arg) {
    return binary(arg, arg);
  }
}

const square = twice(mul);
// log(square(11));
