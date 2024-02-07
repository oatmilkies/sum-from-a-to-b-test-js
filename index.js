// Sum all the values from fromN up to toN
function sum(fromN, toN) {
  if (fromN === toN) {
    return toN;
  }
  return fromN + sum(fromN + 1, toN);
};


console.log(sum(3, 7));

module.exports = sum;