const findKeyByValue = (object, string) => {
  let output;
  for (const value in object) {
    output = matchValue(object, value, string);
    if (output !== undefined) {
      return output;
    }
  }
  
};

const matchValue = (object, value, string) => {
  if (string === object[value]) {
    return value;
  }

};

module.exports = findKeyByValue;