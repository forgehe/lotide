// const assertEqual = require("./assertEqual");

// const assertArraysEqual = require("./assertArraysEqual");

const letterPositions = function(sentence) {
  let results = {};
  // logic to update results here
  // for (const value of sentence) {
  //   results = evaluateChar(results, value, sentence[value]);
  // }
  for (let i = 0; i < sentence.length; i++) {
    results = evaluateChar(results, i, sentence.charAt(i));
    
  }
  return results;
};
const evaluateChar = function(object, index, char) {
  // console.log(object);
  // console.log(`index: ${index} \n char: ${char}`);
  if (object[char] !== undefined) {
    object[char].push(index);
  } else {
    object[char] = [index];
  }
  return object;
};

module.exports = letterPositions;

// assertEqual(eqArrays(Object.keys(letterPositions('hello')), ['h', 'e', 'l', 'o']), true);
// assertEqual(eqArrays(Object.values(letterPositions('hello')["h"]), [0]), true);
// assertArraysEqual(letterPositions("hello").e, [1]);

// console.log(Object.values(letterPositions('hello')));

