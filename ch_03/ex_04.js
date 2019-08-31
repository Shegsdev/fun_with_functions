/**

* Write a function 'composeb'
* that takes two binary functions
* and returns a function
* that calls them both.


* > composeb(add, mul) (2, 3, 7)    // 35
*/

const log = require('../helpers').log;
const add = require('../ch_01/ex_01').add;
const mul = require('../ch_01/ex_01').mul;

function composeb(func1, func2) {
  return function(arg1, arg2, arg3) {
    return func2(func1(arg1, arg2), arg3);
  }
}

let composer = composeb(add, mul);
// log(composer(2, 3, 7));
