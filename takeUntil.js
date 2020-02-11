const takeUntil = (array, callback) => {
  let output = [];
  for (const iterator of array) {
    if (callback(iterator)) {
      break;
    } else {
      output.push(iterator);
    }
  }
  return output;
};

module.exports = takeUntil;