/**

* Write a function "liftf"
* that takes a binary function, and
* makes it callable with two
* invocations.

* NB: A binary function is a function
*     that takes in two arguments.

* > const addf = liftf(add); // "add" function from ch_01
* > addf(3)(4)         // 7
* > liftf(mul)(5)(6)     // 30 ("mul" function from ch_01)

*/

const add = require('./ex_01').add;
const mul = require('./ex_01').mul;
const log = require('../helpers').log;


/**
* @param func
* @return func

*/
function liftf(binary) {
  return function(arg) {
    return function(next) {
      if (next !== undefined) {
        return binary(arg, next);
      }
      return arg;
    }
  }
}

let addf = liftf(add);

// log(addf(3)(4));
// log(liftf(mul)(5)(6));

module.exports = {
  liftf,
}
