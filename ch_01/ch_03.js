/**

* Write a function "addf"
* that adds from two invocations.

* > addf(3)(4)		// 7

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

require('../helpers').log(adder);