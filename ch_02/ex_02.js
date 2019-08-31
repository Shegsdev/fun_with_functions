/**

* Without writing any new functions,
* show three ways to create
* the 'inc' function

* The inc function takes in an argument
* and increment it by 1.
*/

const log = require('../helpers').log;
const add = require('../ch_01/ex_01').add;
const addf = require('../ch_01/ex_03').addf;
const liftf = require('../ch_01/ex_04').liftf;
const curry = require('./ex_01').curry;


// Method 1
const inc = addf(1);

// Method 2
const inc_2 = liftf(add)(1);

// Method 3
const inc_3 = curry(add, 1);

// log(inc(5));
// log(inc_2(5));
// log(inc_3(5));
