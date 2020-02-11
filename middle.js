const middle = (array) => {
  let output = [];
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      output.push(array[Math.floor(array.length / 2) - 1]);
    }
    output.push(array[Math.floor(array.length / 2)]);
  }
  return output;
};

module.exports = middle;