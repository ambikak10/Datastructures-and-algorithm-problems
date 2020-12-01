var isPowerOfTwo = function (n) {
  var temp = ~~(Math.log(n) / Math.log(2));
  console.log(1<<temp)
  return n === (1 << temp);
};
console.log(isPowerOfTwo(32));