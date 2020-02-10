// const assertEqual = require('../assertEqual');
// const tail = require('../tail');

// const words = ["Yo Yo", "Lighthouse", "Labs"];
const test1 = [1, 2, 3, 4, 5, 6, 7];

// assertEqual(tail(test1).length, 6);
// assertEqual(tail(test1)[0], 2);
// assertEqual(tail(test1)[1], 3);
// assertEqual(tail(test1)[2], 4);
// assertEqual(tail(test1)[3], 5);
// assertEqual(tail(test1)[4], 6);
// assertEqual(tail([])[0], undefined);
// assertEqual(tail([1])[0], undefined);


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