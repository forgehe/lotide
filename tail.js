const assertEqual = require("./assertEqual");

let tail = function(array) {
  return array.slice(1);
};

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// const test1 = [1, 2, 3, 4, 5, 6, 7];
// // tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!
// //console.log(words);
// //console.log(tail(words));

// tail(words);
// assertEqual(tail(test1).length, 6);
// assertEqual(tail(test1)[0], 2);
// assertEqual(tail(test1)[1], 3);
// assertEqual(tail(test1)[2], 4);
// assertEqual(tail(test1)[3], 5);
// assertEqual(tail(test1)[4], 6);
// assertEqual(tail([])[0], undefined);
// assertEqual(tail([1])[0], undefined);

module.exports = tail;