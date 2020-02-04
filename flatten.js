// Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  console.log(`The arrays: [${array1.join(', ')}] and [${array2.join(', ')}] are ${eqArrays(array1, array2) ? "" : "not "}equal.`);
  // console.log(array2);
  // console.log(array1);
  // console.log(eqArrays(array1, array2));
};




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

console.log(flatten([1,2,3,4,[2,3,[45,5]],5]));
// assertArraysEqual(flatten([1,2,3,4,[2,3,[45,5]],5]), [1,2,3,4,2,3,[45,5],5]);
assertArraysEqual(flatten([1,2,3,4,[2,3,45,5],5]), [1,2,3,4,2,3,45,5,5]);