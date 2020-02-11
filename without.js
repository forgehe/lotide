const without = (source, toRemove) => {
  let output = [];
  for (let i = 0; i < source.length; i++) {
    let hitRemove = false;
    for (let k = 0; k < toRemove.length; k++) {
      if (toRemove[k] === source[i]) {
        hitRemove = true;
      }
      
    }
    if (hitRemove === false) {
      output.push(source[i]);
    }
  }
  return output;
};

module.exports = without;
