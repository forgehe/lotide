// const eqArrays = require("./eqArrays");

// const assertArraysEqual = require("./assertEqual");

// const words = ["ground", "control", "to", "major", "tom"];

const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

 module.exports = map;

// const results1 = map(words, word => word[0]);
// console.log(results1);

// assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
// assertArraysEqual(test1 = map(words, word => { return "1";}), ['1', '1', '1', '1', '1']);
// assertArraysEqual(test1 = map(words, word => {
//   word += word[1];
//   return word;
// }), ['groundr', 'controlo', 'too', 'majora', 'tomo']); // => true
