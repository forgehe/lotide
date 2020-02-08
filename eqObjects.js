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
  // if (!Array.isArray(object1[value]) && !Array.isArray(object1[value])) {
    
  // }
  let bool = true;


  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (const value in object1) {
      // console.log("!Array.isArray(object1[value]) && typeof object1[value] === object", !Array.isArray(object1[value]) && typeof object1[value] === "object", value);
      console.log(typeof object1[value]);
      if (!Array.isArray(object1[value]) && typeof object1[value] === "object") {
        
        // console.log(`rec eqOjects(${JSON.stringify(object1[value])}, ${JSON.stringify(object2[value])})`);
        bool = eqObjects(object1[value], object2[value]);
        // console.log(`bool is ${bool}`);
      } else {
        // console.log(` value is: ${value} \n object1[${value}] === ${object1[value]} \n object2[${value}] === ${object2[value]}`);
        if (compareKeyValues(object1[value], object2[value]) === false) {
          // console.log(`compareKeyValues flagged false ${JSON.stringify(object1[value])} vs ${JSON.stringify(object2[value])}`);
          bool = false;
        }
        
      }
      
    }
  } else {
    // console.log(`Failed keys.length check: ${JSON.stringify(object1)} vs ${JSON.stringify(object2)}`);
    bool = false;
  }
  return bool;
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


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
const abb = { a: "1", b: "3" };
const aab = { a: "2", b: "2" };
assertEqual(eqObjects(ab, abc), false); // => false
assertEqual(eqObjects(ab, aab), false); // => false
assertEqual(eqObjects(ab, abb), false); // => false

const abd = { a: "1", b: "2", d: "3" };
assertEqual(eqObjects(abd, abc), false); // => false

console.log(`Array tests now:`);
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
assertEqual(eqObjects({ a: 1, b: 2 }, { a: { y: 0, z: 1 }, b: 2 }), false);
// assertEqual(eqObjects({ a: 1, h: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
