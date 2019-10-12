/**

* Modify the 'element' function so that
* the generator argument is optional.
* If a generator is not provided, then
* each of the elements of the array
* will be produced.

* > let ele = element([
	'a', 'b', 'c', 'd'
]);
* > ele()		// 'a'
* > ele()		// 'b'
* > ele()		// 'c'
* > ele()		// 'd'
* > ele()		// undefined

*/

const log = require('../helpers').log;
const fromTo = require('./ex_03').fromTo;

function element(array, gen) {
	if (gen === undefined) {
		gen = fromTo(0, array.length);
	}
	return function() {
		let index = gen();
		if(index !== undefined) {
			return array[index];
		}
	};
}

gen = element(['a', 'b', 'c', 'd']);
// log(gen())
// log(gen())
// log(gen())
// log(gen())
// log(gen())
