console.log(findDuplicate([0, 1, 1, 2, 2]));
function findDuplicate(nums){ 
  var a = {};
  for (var i = 0; i < nums.length; i++) {
    if (!a[nums[i]]) {
      a[nums[i]] = true;
    } else return nums[i];
  }
};
//console.log(findDuplicate([0,1,1,2,2]))
