const letterPositions = (sentence) => {
  let results = {};
  for (let i = 0; i < sentence.length; i++) {
    results = evaluateChar(results, i, sentence.charAt(i));
    
  }
  return results;
};
const evaluateChar = (object, index, char) => {
  if (object[char] !== undefined) {
    object[char].push(index);
  } else {
    object[char] = [index];
  }
  return object;
};

module.exports = letterPositions;



