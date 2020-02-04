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
  console.log(`The arrays: [${array1}] and [${array2}] are ${eqArrays(array1, array2) ? "" : "not "}equal.`);
  // console.log(array2);
  // console.log(array1);
  // console.log(eqArrays(array1, array2));
};


//This function should take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.

const without = function(source, toRemove) {
  let output = [];
  for (let i = 0; i < source.length; i++) {
    let hitRemove = false;
    for (let k = 0; k < toRemove.length; k++) {
      if (toRemove[k] === source[i]) {
        hitRemove = true;
      }
      
    }
    if (hitRemove === false) {
      output.push(source[i]);
    }
  }
  return output;
};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without(["1", "2", "3"], ["1", "2", "3"]), []);
assertArraysEqual(without(["91", "eight2", "3"], ["1", "2", "3"]), ["91", "eight2"]);

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
