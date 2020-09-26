var isPowerOfTwo = function (n) {
  var temp = ~~(Math.log(n) / Math.log(2));
  return n === (1 << temp);
};
console.log(isPowerOfTwo(218));