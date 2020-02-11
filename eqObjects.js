const eqArrays = require("./eqArrays");

const eqObjects = (object1, object2) => {
  let bool = true;
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (const value in object1) {
      console.log(typeof object1[value]);
      if (!Array.isArray(object1[value]) && typeof object1[value] === "object") {
        bool = eqObjects(object1[value], object2[value]);
      } else {
        if (compareKeyValues(object1[value], object2[value]) === false) {
          bool = false;
        }
      }
    }
  } else {
    bool = false;
  }
  return bool;
};

const compareKeyValues = (argsObj1, argsObj2) => {
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
