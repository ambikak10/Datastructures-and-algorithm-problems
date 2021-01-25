var singleNumber = function (nums) {
  var ans = 0;
  for (var i = 0; i < nums.length; i++) {
    ans = ans ^ nums[i];
    console.log(ans);
  }
  return ans;
};
console.log(singleNumber([4, 1, 2, 1, 2]));
//o(n)
//o(1)
