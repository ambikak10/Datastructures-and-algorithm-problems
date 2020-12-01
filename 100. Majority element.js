// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

var majorityElement = function (nums) {
  if (nums.length === 1){
    return nums[0];
  }
var majority = Math.ceil(nums.length / 2);
 console.log(majority);
 var dict = {};
  for(var i=0; i < nums.length; i++) {
     if(nums[i] in dict){
       console.log(dict)
       dict[nums[i]]++;
        if(dict[nums[i]] >= majority){
          return nums[i];
        }
     } else {
       dict[nums[i]] = 1;
     }
  }
};
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));


    const hash = {}
    let max = 0, val
    
    for (let i = 0; i < nums.length; i++){
        hash[nums[i]] ? hash[nums[i]]++ : hash[nums[i]] = 1
        if (hash[nums[i]] > max){
            max = hash[nums[i]]
            val = nums[i]
        }
    }
    
    return val
