// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("😀 Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("😡 Assertion Failed: " + actual + " !== " + expected);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, "1");
assertEqual("true", "false");
assertEqual("neat", "neat");
assertEqual(29, 29);
assertEqual(29, 28);
assertEqual(true, 0);