const eqObjects = require("./eqObjects");

const assertObjectsEqual = (object1, object2) => {
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(object1, object2) === true) {
    console.log(`😀 Assert assertObjectsEqual Equal: \n${inspect(object1)} \n===  \n${inspect(object2)}`);
  } else {
    console.log(`😡 Assert assertObjectsEqual Not Equal: \n${inspect(object1)} \n!== \n${inspect(object2)}`);
  }
};

module.exports = assertObjectsEqual;