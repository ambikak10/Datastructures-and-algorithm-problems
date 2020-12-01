var twoSum = function (nums, target) {
  var a = [];
  for (var i = 0; i < nums.length; i++) {
    temp = target - nums[i];
    if(a[temp] !== undefined) return [a[temp], i]
    a[nums[i]] = i;
  }
}

console.log(twoSum([2, 7, 11, 15], 9))
// O(n) space and time
//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.