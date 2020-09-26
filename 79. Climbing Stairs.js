var climbingStairs = function (n) {
  var a = [];
  a[0] = 1;
  a[1] = 1;
  for (var i = 2; i <= n; i++) {
    a[i] = a[i - 1] + a[i - 2];
  }
  return a[n];
}
console.log(climbingStairs(4));