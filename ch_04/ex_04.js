/**

* Write an 'element' function that
* takes an array and a generator and returns
* a generator that will produce elements
* from the array

* > let ele = element([
	'a', 'b', 'c', 'd'
], fromTo(1, 3))
* > ele()		// 'b'
* > ele()		// 'c'
* > ele()		// undefined

*/

const log = require('../helpers').log;
const fromTo = require('./ex_03').fromTo;

/**
* @param arr, func
* @return func
*/

function element(array, gen) {
	return function() {
		let index = gen();
		if(index !== undefined) {
			return array[index];
		}
	};
}

let index = element(['a', 'b', 'c', 'd'], fromTo(0, 3));
// log(index())
// log(index())
// log(index())
