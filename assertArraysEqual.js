const eqArrays = require("./eqArrays");

const assertArraysEqual = (array1, array2) => {
  console.log(`The arrays: [${array1}] and [${array2}] are ${eqArrays(array1, array2) ? "" : "not "}equal.`);
};

module.exports = assertArraysEqual;