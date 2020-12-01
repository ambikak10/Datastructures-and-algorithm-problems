//console.log(rob([3, 1, 0, 9, 4, 2]));
//console.log(rob([200, 3, 140, 20, 10]));

console.log(rob([2, 7, 9, 3, 1])); //11

var rob = function (nums) {
  if (nums.length === 0) return 0;
  else if (nums.length === 1) return nums[0];

  const robHelper = (start, end) => {
    const dp = [];

    for (let i = start; i <= end; i++) {
      dp[i] = Math.max(nums[i] + (dp[i - 2] || 0), dp[i - 1] || 0);
    }

    return dp[end];
  };

  return Math.max(robHelper(0, nums.length - 2), robHelper(1, nums.length - 1));l
};