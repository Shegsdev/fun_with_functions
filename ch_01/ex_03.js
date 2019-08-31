/**

* Write a function "addf"
* that adds with two invocations.

* > addf(3)(4)    // 7

*/

/**
* @param int
* @return func

*/
function addf(arg) {
  return function(next) {
    if (next !== undefined) {
      return arg + next;
    }
    return arg;
  }
}

let adder = addf(3)(4);

// require('../helpers').log(adder);

module.exports = {
  addf,
}
