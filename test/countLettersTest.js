const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#countLetters", () => {
  it(`given countLetters('sssstring'), return {s: 4, t: 1, r: 1, i: 1, n: 1, g: 1}`, () => {
    assert.deepEqual(countLetters('sssstring'), {s: 4, t: 1, r: 1, i: 1, n: 1, g: 1});
  });
});