const findKeyByValue = (object, string) => {
  let output;
  console.log(object);
  for (const value in object) {
    output = matchValue(object, value, string);
    if (output !== undefined) {
      return output;
    }
  }
  
};

const matchValue = (object, value, string) => {
  console.log(`${string} comparing ${object[value]}`);
  if (string === object[value]) {
    console.log(`hit: ${string} comparing ${object[value]}`);
    return value;
  }

};

module.exports = findKeyByValue;