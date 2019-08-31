/**

* Write a 'limit' function
* that allows a binary function
* to be called a limited number
* of times.

* NB: A binary function is a function
*     that takes in two argument.

* > const add_ltd = limit(add, 1); // call add only once
* > add_ltd(3, 4)   // 7
* > add_ltd(3, 5)   // undefined

*/

const log = require('../helpers').log;
const add = require('../ch_01/ex_01').add;

function limit(binary, lim) {
  return function(...args) {
    while (lim > 0) {
      lim -= 1;
      return binary(...args);
    }
  }
}

const add_ltd = limit(add, 1);
// log(add_ltd(3, 4))
// log(add_ltd(3, 5))
