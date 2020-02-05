// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀 Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`😡 Assertion Failed: ${actual} !== ${expected}`);
  }
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
  if (argsObj1 === argsObj2) {
    return true;
  } else {
    return false;
  }
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
 // => true

assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
const abb = { a: "1", b: "3" };
const aab = { a: "2", b: "2" };
assertEqual(eqObjects(ab, abc), false); // => false
assertEqual(eqObjects(ab, aab), false); // => false
assertEqual(eqObjects(ab, abb), false); // => false

const abd = { a: "1", b: "2", d: "3" };
assertEqual(eqObjects(abd, abc), false); // => false

