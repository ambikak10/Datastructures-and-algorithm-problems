var trailingZeroes = function (n) {
  var cur = 5,
    total = 0;

  while (cur <= n) {
    total += Math.floor(n / cur);
    cur *= 5;
  }

  return total;
};
console.log(trailingZeroes(3));


// Given an integer n, return the number of trailing zeroes in n!.

// Follow up: Could you write a solution that works in logarithmic time complexity?