const assert = require('chai').assert;
const takeUntil   = require('../takeUntil');

describe("#takeUntil", () => {
  it("given takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0), return [1, 2, 5, 7, 2]", () => {
    assert.deepEqual(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0), [1, 2, 5, 7, 2]);
  });
  it("given [test1], return 3", () => {
    assert.deepEqual(takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], x => x === ','), ["I've", "been", "to", "Hollywood"]);
  });
});