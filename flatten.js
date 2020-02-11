const flatten = (array) => {
  let output = [];
  array.forEach(args => {
    if (Array.isArray(args) === true) {
      args.forEach(args2 => {
        output.push(args2);
      });
    } else {
      output.push(args);
    }
  });
  return output;
};

module.exports = flatten;