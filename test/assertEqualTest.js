// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual(1, "1");
// assertEqual("true", "false");
// assertEqual("neat", "neat");
// assertEqual(29, 29);
// assertEqual(29, 28);
// assertEqual(true, 0);

const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe("#head", () => {
  it("given 1, 1. return console.log", () => {
    assert.strictEqual(assertEqual(1, 1), console.log(`😀 Assertion Passed: 1 ===  1`));
  });
  it("given 'Lighthouse Labs', 'Bootcamp' return console.log", () => {
    assert.strictEqual(assertEqual("Lighthouse Labs", "Bootcamp"), console.log(`😡 Assertion Failed: Lighthouse Labs ===  Bootcamp`)); 
  });
});