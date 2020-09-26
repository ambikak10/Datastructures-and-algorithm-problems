var maxSum = function (nums) {
  let sum = 0;
  let maxn = -Number.MAX_VALUE;
  nums.forEach(function (item) {
    sum = sum + item;
    if (maxn < sum) maxn = sum;
    if (sum < 0) sum = 0;
  });
  return maxn;
};
// console.log(maxSum([-2, -3, 4, -1, -2, 1, 5, -3]))

// Time complexity : O(n)
