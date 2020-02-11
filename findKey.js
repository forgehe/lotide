const findKey = (object, callback) => {
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

