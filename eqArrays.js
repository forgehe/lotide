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
  let bool = true;
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (Array.isArray(array1[i])) {
      if (!eqArrays(array1[i], array2[i])) {
        bool = false;
      }
    } else {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    
  }
  return bool;
};

// TEST CODE
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false


// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false


// assertEqual(eqArrays([], []), true);
// assertEqual(eqArrays(["1", "2",], ["1", "2", 3]), false);

// testing for multiple nested arrays

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);

assertEqual(eqArrays([1, [2, [3]], 4, 5, [[[6, [[7]], [[8, 9]]]]], 10], [1, [2, [3]], 4, 5, [[[6, [[7]], [[8, 9]]]]], 10]), true);

