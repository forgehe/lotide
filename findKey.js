// const assertEqual = require("./assertEqual");

//Implement the function findKey which takes in an object and a callback.
//It should scan the object and return the first key for which the callback returns a truthy value.
//If no key is found, then it should return undefined.

const findKey = function(object, callback) {
  let output;
  // console.log(object);
  for (const value in object) {
    // console.log(`${value} in ${callback(value)}`)
    if (callback(object[value])) {
      return value;
    }
  }
  return output;
};

module.exports = findKey;

// const test1 = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2); // => "noma"

// const test2 = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 4); // => "noma"

// const test3 = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 3); // => "noma"


// assertEqual(test1, "noma");
// assertEqual(test2, undefined);
// assertEqual(test3, "Akaleri");