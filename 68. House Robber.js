// Time: o(n)
// Space: o(n)?
var robloot = function (nums) {
  var len = nums.length;
  if (!len) return 0;

  var dp = [];
  dp[0] = [];
  dp[0][0] = 0, // not steal 1st room
    dp[0][1] = nums[0]; // steal 1st room

  for (var i = 1; i < len; i++) {
    dp[i] = [];

    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1]);
    dp[i][1] = dp[i - 1][0] + nums[i];
  }

  return Math.max(dp[len - 1][0], dp[len - 1][1]);
};
console.log(robloot([2, 7, 9, 3, 1]));

// Time:o(n)
// Space: o(1)
var rob = function(nums){
  var n = nums.length;
    if (n == 0){
     return 0;
    }

    value1 = nums[0];
    if(n == 1){
     return value1;
    }

    value2 = Math.max(nums[0], nums[1])
    if(n == 2)
    return value2;     
    var max_val = null;
  
  for(i=2; i < n; i++){
   max_val = Math.max(nums[i] + value1, value2)
   value1 = value2;
   value2 = max_val;
  }
 return max_val;
}
console.log(rob([2, 7, 9, 3, 1]));
