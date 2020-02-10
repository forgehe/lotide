const eqArrays = require("./eqArrays");

const assertArraysEqual = function(array1, array2) {
  console.log(`The arrays: [${array1}] and [${array2}] are ${eqArrays(array1, array2) ? "" : "not "}equal.`);
};

// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
// assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false


// assertArraysEqual(eqArrays([], []));
// assertArraysEqual(eqArrays(["1", "2",], ["1", "2", 3]));

module.exports = assertArraysEqual;