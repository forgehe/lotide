// const eqArrays = require("./eqArrays");

// const assertArraysEqual = require("./assertArraysEqual");




// Create a function flatten which will take in an array of arrays and return a "flattened" version of the array.

// The lodash implementation can handle seemingly unlimited levels of "nested" arrays (arrays containing arrays containing arrays containing ... you get the point). Our function however, will for now be simpler and only handle one level of nesting.


const flatten = function(array) {
  let output = [];
  array.forEach(args => {
    if (Array.isArray(args) === true) {
      args.forEach(args2 => {
        output.push(args2);
      });
    } else {
      output.push(args);
    }
  });
  return output;
};

// console.log(flatten([1,2,3,4,[2,3,[45,5]],5]));
// // assertArraysEqual(flatten([1,2,3,4,[2,3,[45,5]],5]), [1,2,3,4,2,3,[45,5],5]);
// assertArraysEqual(flatten([1,2,3,4,[2,3,45,5],5]), [1,2,3,4,2,3,45,5,5]);

module.exports = flatten;