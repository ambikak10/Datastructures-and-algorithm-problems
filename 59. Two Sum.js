var twoSum = function (nums, target) {
  var a = [];
  for (var i = 0; i < nums.length; i++) {
    temp = target - nums[i];
    if(a[tmp] !== undefined) return [a[temp], i]
    a[nums[i]] = i;
  }
}

console.log(twoSumIndices([2, 7, 11, 15, 18, 21], 36))
// O(n) space and time