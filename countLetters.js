const countLetters = (argsString) => {
  let output = {};
  for (const value of argsString) {
    output = addToObject(output, value);
  }
  return output;
};

const addToObject = (argsObject, argsString) => {
  if (argsObject[argsString] !== undefined) {
    argsObject[argsString]++;
  } else {
    argsObject[argsString] = 1;
  }
  return argsObject;
};

module.exports = countLetters;