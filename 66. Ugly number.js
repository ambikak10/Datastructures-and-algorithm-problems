// Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.

// Time : o(n)
// space: o(1)?
var isUgly = function (num) {
  if(num === 0){
    return false;
  }
  a = [2, 3, 5]
  for (var i = 0; i < 3; i++) {
    while (num % a[i] === 0) {
      num = num / a[i];
    }
  }
  return num === 1 ? true : false
};
console.log(isUgly(68));

// if number is factors of 2^3, 3^4, 5^1, then, complexity is 3+4+1
// while loop executes 8 times
