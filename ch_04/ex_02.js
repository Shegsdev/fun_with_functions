/**

* Write a 'to' function that
* takes a generator and an
* end value, and returns a generator
* that will produce numbers up to
* that limit

* > let index = to(from(1), 3)
* > index()   // 0
* > index()		// 1
* > index()		// undefined

*/

const log = require('../helpers').log;
const from = require('./ex_01').from;

/**
* @param func
* @return func
*/
function to(gen, lim) {
  return function() {
  	let start = gen();
  	if (start < lim) {
  		return start;
  	}
  }
}

let index = to(from(1), 3)
// log(index())
// log(index())
// log(index())
// log(index())

module.exports = {
	to,
}