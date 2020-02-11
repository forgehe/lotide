const assert = require('chai').assert;
const flatten = require('../flatten');

describe("#flatten", () => {
  it(`given flatten([1,2,3,4,[2,3,[45,5]],5], return [1,2,3,4,[2,3,[45,5]],5]`, () => {
    assert.deepEqual(flatten([1,2,3,4,[2,3,[45,5]],5]), [1,2,3,4,2,3,[45,5],5]);
  });
});


// Only can flatten once
