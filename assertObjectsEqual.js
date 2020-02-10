// const assertEqual = require("./assertEqual");

// const eqArrays = require("./eqArrays");

const eqObjects = require("./eqObjects");
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

// In this simple scenario, two objects are equal when:
// They have the same number of keys
// The value for each key in one object is the same as the value for that same key in the other object


const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect; // <= add this line
  // if (eqObjects(object1, object2) === true) {
  //   console.log(`😀 Assert assertObjectsEqual Equal: \n${JSON.stringify(object1)} \n===  \n${JSON.stringify(object2)}`);
  // } else {
  //   console.log(`😡 Assert assertObjectsEqual Not Equal: \n${JSON.stringify(object1)} \n!== \n${JSON.stringify(object2)}`);
  // }
  if (eqObjects(object1, object2) === true) {
    console.log(`😀 Assert assertObjectsEqual Equal: \n${inspect(object1)} \n===  \n${inspect(object2)}`);
  } else {
    console.log(`😡 Assert assertObjectsEqual Not Equal: \n${inspect(object1)} \n!== \n${inspect(object2)}`);
  }
};



// const testA = {
//   testcase1: "one",
//   testcase2: "two"
// }

// const testB = {
//   testcase2: "two",
//   testcase1: "one"
// }

// const testC = {
//   testcase2: "two",
//   testcase1: ["one", 2, 3, "eight"]
// }

// const testD = {
//   testcase1: "one",
//   testcase2: "two"
// }

// const testE = {
//   testcase1: ["one", 2, 3, "eight"],
//   testcase2: "two"
// }
// assertObjectsEqual(testA, testB);
// assertObjectsEqual(testC, testD);
// assertObjectsEqual(testC, testE);

module.exports = assertObjectsEqual;