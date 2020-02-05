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
};


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

// In this simple scenario, two objects are equal when:
// They have the same number of keys
// The value for each key in one object is the same as the value for that same key in the other object

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (const value in object1) {
      // console.log(`value is: ${value} \n object1[${value}] === ${object1[value]} \n object2[${value}] === ${object2[value]}`)
      if (compareKeyValues(object1[value], object2[value]) === false) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};

const compareKeyValues = function(argsObj1, argsObj2) {
  if (Array.isArray(argsObj1) === true || Array.isArray(argsObj2) === true) {
    return eqArrays(argsObj1, argsObj2);
  } else {
    if (argsObj1 === argsObj2) {
      return true;
    } else {
      return false;
    }
  }
};

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



const testA = {
  testcase1: "one",
  testcase2: "two"
}

const testB = {
  testcase2: "two",
  testcase1: "one"
}

const testC = {
  testcase2: "two",
  testcase1: ["one", 2, 3, "eight"]
}

const testD = {
  testcase1: "one",
  testcase2: "two"
}

const testE = {
  testcase1: ["one", 2, 3, "eight"],
  testcase2: "two"
}
assertObjectsEqual(testA, testB);
assertObjectsEqual(testC, testD);
assertObjectsEqual(testC, testE);