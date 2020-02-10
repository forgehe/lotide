// const eqArrays = require("./eqArrays");
// const assertArraysEqual = require("./assertArraysEqual");

const middle = function(array) {
  let output = [];
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      output.push(array[Math.floor(array.length / 2) - 1]);
    }
    output.push(array[Math.floor(array.length / 2)]);
  }
  return output;
};


// assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4,5]);
// assertArraysEqual(middle([]), []);
// assertArraysEqual(middle([1, 2]), []);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]), [6]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);

module.exports = middle;