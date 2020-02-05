// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀 Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};



const countLetters = function(argsString) {
  let output = {};
  for (const value of argsString) {
    // console.log(`object: ${Object.entries(argsString)} \n value: ${value}`);
    // console.log(Object.entries(argsString));
    output = addToObject(output, value);
  }
  // console.log(Object.entries(output));
  // console.log(Object.keys(output));
  // console.log(Object.values(output));
  return output;
};

const addToObject = function(argsObject, argsString) {
  // console.log(argsString);
  if (argsObject[argsString] !== undefined) {
    argsObject[argsString]++;
    // console.log("addToObject if: " + argsObject[argsString] + " " + Object.keys(argsObject)+ " " + Object.values(argsObject));
  } else {
    argsObject[argsString] = 1;
    // console.log("addToObject else: " + argsObject[argsString] + " " + Object.keys(argsObject)+ " " + Object.values(argsObject));
  }
  return argsObject;
};

console.log(countLetters('string'));

console.log(countLetters('sssstring'));
console.log(countLetters('aaufhaidsjvkbaf'));
console.log(countLetters('ssssurejsidjfhudisjisdakvbfhuidsjkfhusjdkdftring'));
console.log(countLetters('4895621adsfasgaf54562'));

