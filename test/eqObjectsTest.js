const assert = require('chai').assert;
const eqObjects   = require('../eqObjects');


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
// const abc = { a: "1", b: "2", c: "3" };
const ayzb = { a: { y: 0, z: 1 }, b: 2 };


describe("#eqObjects", () => {
  it("given ab = { a: '1, b: '2' } and ba = { b: '2', a: '1' }", () => {
    assert.deepEqual(eqObjects(ab, ba), true);
  });
  it(`given ab = { a: "1", b: "2" }, ayzb = { a: { y: 0, z: 1 }, b: 2 }, return false`, () => {
    assert.deepEqual(eqObjects(ab, ayzb), false);
  });
});





// assertEqual(eqObjects(ab, ba), true);


// const abb = { a: "1", b: "3" };
// const aab = { a: "2", b: "2" };
// assertEqual(eqObjects(ab, abc), false); // => false
// assertEqual(eqObjects(ab, aab), false); // => false
// assertEqual(eqObjects(ab, abb), false); // => false

// const abd = { a: "1", b: "2", d: "3" };
// assertEqual(eqObjects(abd, abc), false); // => false

// console.log(`Array tests now:`);
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false

// assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);


// assertEqual(eqObjects({ a: 1, h: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);