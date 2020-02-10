const without = function(source, toRemove) {
  let output = [];
  for (let i = 0; i < source.length; i++) {
    let hitRemove = false;
    for (let k = 0; k < toRemove.length; k++) {
      if (toRemove[k] === source[i]) {
        hitRemove = true;
      }
      
    }
    if (hitRemove === false) {
      output.push(source[i]);
    }
  }
  return output;
};

module.exports = without;
// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
// assertArraysEqual(without(["1", "2", "3"], ["1", "2", "3"]), []);
// assertArraysEqual(without(["91", "eight2", "2"], ["1", "2", "3"]), ["91", "eight2"]);

// const words = ["hello", "world", "lighthouse"];
// without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);
