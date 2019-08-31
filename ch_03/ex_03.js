/**

* Write a function 'composeu'
* that takes two unary functions
* and returns a unary function
* that calls them both.

* NB: A unary function is a function
*     that takes in only one argument.

* > composeu(doubl, square) (5)   // 100

* doubl (5 + 5) = 10
* square (10 * 10) = 100

*/

const log = require('../helpers').log;

function composeu(func1, func2) {
  return function(arg) {
    return func2(func1(arg));
  }
}

// Create function to double a number
const doubl = x => x + x;

// Create function to square a number
const square = x => x * x;

let compose5 = composeu(doubl, square);
// log(compose5(5));
