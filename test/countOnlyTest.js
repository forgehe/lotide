const assert = require('chai').assert;
const countOnly = require('../countOnly');

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

describe("#countOnly", () => {
  it(`given countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true }, return {Jason: 1, Fang: 2}`, () => {
    assert.deepEqual(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true }), {Jason: 1, Fang: 2});
  });
});