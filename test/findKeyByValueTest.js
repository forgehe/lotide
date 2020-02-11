const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  sitcom: "That '70s Show",
  drama: "The Wire",
  test: "The Wire",
  romcom: "Love Actually"
};

describe("#findKeyByValue", () => {
  it(`given findKeyByValue(bestTVShowsByGenre, "The Wire"), return "drama"`, () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
});