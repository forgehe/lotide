const assert = require('chai').assert;
const without   = require('../without');

describe("#tail", () => {
  it("given without([1, 2, 3], [1]), return [2, 3]", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });
  it(`given (without(["91", "eight2", "2"], ["1", "2", "3"]), return ["91", "eight2"]`, () => {
    assert.deepEqual(without(["91", "eight2", "2"], ["1", "2", "3"]), ["91", "eight2"]);
  });
});
