// Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.
const eqArrays = function (array1, array2) {
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

const assertArraysEqual = function (array1, array2) {
  console.log(`The arrays: [${array1}] and [${array2}] are ${eqArrays(array1, array2) ? "" : "not "}equal.`);
};

// The function will return a "slice of the array with elements taken from the beginning." 
// It should keep going until the callback/predicate returns a truthy value. 




const takeUntil = function (array, callback) {
  // ...
  let output = [];
  for (const iterator of array) {
    // console.log("TCL: takeUntil -> iterator", iterator)
    // console.log("TCL: takeUntil -> callback", callback)
    if (callback(iterator)) {
      break;
    } else {
      // console.log(`${callback(iterator)}`)
      output.push(iterator);
    }
  }
  return output;
}




const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);




assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]); // => true
/*
[ 1, 2, 5, 7, 2 ]
---
[ 'I\'ve', 'been', 'to', 'Hollywood' ]
*/