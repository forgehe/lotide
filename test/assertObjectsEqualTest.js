const assert = require('chai').assert;
const assertObjectsEqual   = require('../assertObjectsEqual');

const testA = {testcase1: "one", testcase2: "two"}

const testB = {testcase2: "two", testcase1: "one"}

const testC = {testcase2: "two", testcase1: ["one", 2, 3, "eight"]}

const testD = {testcase1: "one", testcase2: "two"}

// const testE = {
//   testcase1: ["one", 2, 3, "eight"],
//   testcase2: "two"
// }
// assertObjectsEqual(testA, testB);
// assertObjectsEqual(testC, testD);
// assertObjectsEqual(testC, testE);

describe("#assertObjectsEqual", () => {
  it(`given {testcase1: "one", testcase2: "two"} and {testcase2: "two", testcase1: "one"} are equal`, () => {
    assert.deepEqual({testcase1: "one", testcase2: "two"}, {testcase2: "two", testcase1: "one"});
  });
  it(`given {testcase2: "two", testcase1: ["one", 2, 3, "eight"]} and {testcase1: "one", testcase2: "two"} are not equal`, () => {
    assert.notDeepEqual({testcase2: "two", testcase1: ["one", 2, 3, "eight"]}, {testcase1: "one", testcase2: "two"}); 
  });
});

