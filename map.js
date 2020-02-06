/* 
Our map function will take in two arguments:

    An array to map
    A callback function

The map function will return a new array based on the results of the callback function.
*/
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  console.log(`The arrays: [${array1}] and [${array2}] are ${eqArrays(array1, array2) ? "" : "not "}equal.`);
};

const words = ["ground", "control", "to", "major", "tom"];

const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

 
const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(test1 = map(words, word => { return "1";}), ['1', '1', '1', '1', '1']);
assertArraysEqual(test1 = map(words, word => {
  word += word[1];
  return word;
}), ['groundr', 'controlo', 'too', 'majora', 'tomo']); // => true
