var hammingWeight = function (n) {
  var count=0;
  while (n != 0) {
    if (n & 1)
      count++;

    n = n >> 1;
  }
  return count;
};
console.log(hammingWeight(110));

console.log(11 >> 1) //5
console.log(11 << 1) //22

console.log(3 >> 1) //1
console.log(3 << 1) //6