//o(n)
//o(1)
  var move0s = function (nums) {
    for (var i = nums.length; i--;) {
      if (!nums[i]) {
        console.log(!0)
        nums.splice(i, 1);
        nums.push(0);
      }
    }
    return nums;
  };

console.log(move0s([0, 1, 0, 3, 12]));


var moveZeroes = function(nums){
  var n = nums.length;
  if(n===0 || n===1) {
    return;
  }
  var left = 0, right = 0;
  var temp;

  while(right < n){
    if(nums[right] === 0){
      right++;
    } else {
      temp = nums[left];
      nums[left] =  nums[right];
      nums[right] = temp;
      console.log(temp)
      left++;
      right++;
    }
  }
  return nums;
}
console.log(moveZeroes([1, 8, 0, 3, 12]));