// Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match. 
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
}

const assertArraysEqual = function(array1, array2) {
  console.log(`The arrays: [${array1}] and [${array2}] are ${eqArrays(array1, array2) ? "" : "not "}equal.`)
  // console.log(array2);
  // console.log(array1);
  // console.log(eqArrays(array1, array2));
}

const middle = function(array) {
  let output = [];
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      output.push(array[Math.floor(array.length / 2) - 1]);
    }
    output.push(array[Math.floor(array.length / 2)]);
  }
  return output;
}


assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4,5]);
assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]), [6]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);