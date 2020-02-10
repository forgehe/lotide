const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");

// TEST CODE
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false


// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false


// assertEqual(eqArrays([], []), true);
// assertEqual(eqArrays(["1", "2",], ["1", "2", 3]), false);

// testing for multiple nested arrays

// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);

// assertEqual(eqArrays([1, [2, [3]], 4, 5, [[[6, [[7]], [[8, 9]]]]], 10], [1, [2, [3]], 4, 5, [[[6, [[7]], [[8, 9]]]]], 10]), true);

