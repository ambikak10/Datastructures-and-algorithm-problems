//o(n)*o(n) time complexity?
//o(1) space complexity
var removeElement = function (nums, val) {
  for (var i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === val) {
      //let removeIndex = nums.indexOf(a[i]);
      nums.splice(i, 1);

    }
  }
  return nums.length;
}
//console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));

//o(n)
//o(1)
var elementRemoval1 = function(nums, val){
     nums = nums.filter(function(x){
     return x !== val;
  })
  return nums;
}
console.log(elementRemoval1([3,2,2,3], 3));