// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀 Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
}

const assertArraysEqual = function(array1, array2) {
  console.log(`The arrays: [${array1}] and [${array2}] are ${eqArrays(array1, array2) ? "" : "not "}equal.`)
  // console.log(array2);
  // console.log(array1);
  // console.log(eqArrays(array1, array2));
}

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
// assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false


// assertArraysEqual(eqArrays([], []));
// assertArraysEqual(eqArrays(["1", "2",], ["1", "2", 3]));