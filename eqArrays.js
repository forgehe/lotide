const eqArrays = (array1, array2) => {
  let bool = true;
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (Array.isArray(array1[i])) {
      if (!eqArrays(array1[i], array2[i])) {
        bool = false;
      }
    } else {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  }
  return bool;
};

module.exports = eqArrays;