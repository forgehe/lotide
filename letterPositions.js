const assertEqual = require("./assertEqual");

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

const assertArraysEqual = function(array1, array2) {
  console.log(`The arrays: [${array1}] and [${array2}] are ${eqArrays(array1, array2) ? "" : "not "}equal.`);
};

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

assertEqual(eqArrays(Object.keys(letterPositions('hello')), ['h', 'e', 'l', 'o']), true);
assertEqual(eqArrays(Object.values(letterPositions('hello')["h"]), [0]), true);
assertArraysEqual(letterPositions("hello").e, [1]);

console.log(Object.values(letterPositions('hello')));

