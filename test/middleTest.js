const assert = require('chai').assert;
const middle   = require('../middle');

describe("#tail", () => {
  it("given [1], return []", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("given [1, 2, 3], return [2]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("given [1, 2, 3, 4, 5, 6, 7, 8], return [4,5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4,5]);
  });
});


// assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4,5]);
// assertArraysEqual(middle([]), []);
// assertArraysEqual(middle([1, 2]), []);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]), [6]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);