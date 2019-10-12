/**

* Write a 'fromTo' function that
* produces a generator that will
* produce values in a range.

* > let index = fromTo(0, 3)
* > index()   // 0
* > index()		// 1
* > index()		// 2
* > index()		// undefined

*/

const log = require('../helpers').log;
const to = require('./ex_02').to;
const from = require('./ex_01').from;

/**
* @param func
* @return func
*/
function fromTo(start, end) {
  return to(from(start), end);
}

let index = fromTo(0, 5);
// log(index())
// log(index())
// log(index())
// log(index())

module.exports = {
	fromTo,
}
