/**

* Write a 'from' function
* that produces a generator
* that will produce a series of values
* of times.

* This function takes a starting
* value and increments it at every
* invocation

* > let index = from(0);
* > index()   // 0
* > index()		// 1
* > index()		// 2
* > index()		// 3

*/

const log = require('../helpers').log;

/**
* @param int
* @return func
*/
function from(start) {
	let next = start;
  return function() {
  	next += 1;
  	return next;
  }
}

let index = from(0)
// log(index())
// log(index())
// log(index())
// log(index())

