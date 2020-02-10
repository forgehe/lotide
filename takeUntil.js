const takeUntil = function(array, callback) {
  let output = [];
  for (const iterator of array) {
    // console.log("TCL: takeUntil -> iterator", iterator)
    // console.log("TCL: takeUntil -> callback", callback)
    if (callback(iterator)) {
      break;
    } else {
      // console.log(`${callback(iterator)}`)
      output.push(iterator);
    }
  }
  return output;
};

module.exports = takeUntil;


// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);




// assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]); // => true
/*
[ 1, 2, 5, 7, 2 ]
---
[ 'I\'ve', 'been', 'to', 'Hollywood' ]
*/