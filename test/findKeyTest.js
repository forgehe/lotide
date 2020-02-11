const assert = require('chai').assert;
const findKey = require('../findKey');

const test1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

describe("#findKey", () => {
  it(`given test1, return "noma"`, () => {
    assert.deepEqual(test1, "noma");
  });
});
