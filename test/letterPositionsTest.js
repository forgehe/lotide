const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  it(`given letterPositions('hello'), return {h: [0], e: [1], l: [2], o: [3]}`, () => {
    assert.deepEqual(letterPositions('helo'), {h: [0], e: [1], l: [2], o: [3]});
  });
});


// {h: 1, e: 1, l: 2, o: 1}

// letterPositions('helo') gives varying results with the l key.