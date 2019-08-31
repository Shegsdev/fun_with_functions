/**

* Write 'reverse' a function
* that reverses the arguments of
* a binary function

* NB: A binary function is a function
*     that takes in two arguments.

* > const bus = reverse(sub)
* > bus(3, 2)       // -1

*/

const log = require('../helpers').log;
const sub = require('../ch_01/ex_01').sub;


/**
* @param func
* @return func

*/
function reverse(binary) {
  return function(...args) {
    return binary(args[1], args[0]);
  }
}

const bus = reverse(sub);
// log(bus(3, 2))
