// const assertEqual = require("./assertEqual");

const eqArrays = require("./eqArrays");


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

module.exports = eqObjects;
