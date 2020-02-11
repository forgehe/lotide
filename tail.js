const assertEqual = require("./assertEqual");

let tail = (array) => {
  return array.slice(1);
};

module.exports = tail;