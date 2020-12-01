var containsDuplicate = function (nums) {

  if (nums.length === 1 || nums.length === 0) return false;

  //   console.log(nums.indexOf(nums[0]));
  //   console.log(nums.lastIndexOf(nums[0]));

  // for (i = 0; i < nums.length; i++) {
  //   if (nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])) {
  //     return true;
  //   }
  // }
  // return false;


    var a = {};
    for (var i = 0; i < nums.length; i++) {
      if (!a[nums[i]]) {
        a[nums[i]] = true;
      } else return true;;
    }
    return false;
};
console.log(containsDuplicate([3, 1]));