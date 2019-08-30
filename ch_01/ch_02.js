/**

* Write a function "identityf"
* that takes an argument and
* returns a function that returns
* that argument.

* > const three = identityf(3);
* > three()   // 3

*/

function identityf(arg) {
  return function() {
    return arg;
  }
}

let three = identityf(3);

require('../helpers').log(three());
