const test1 = [1, 2, 3, 4, 5, 6, 7];

const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("given [1, 2, 3, 4, 5, 6, 7], return [2, 3, 4, 5, 6, 7]", () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5, 6, 7]), [2, 3, 4, 5, 6, 7]);
  });
  it("given [test1], return 3", () => {
    assert.deepEqual(tail(test1), [2, 3, 4, 5, 6, 7]);
  });
});