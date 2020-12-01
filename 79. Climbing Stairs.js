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


/*You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

*/