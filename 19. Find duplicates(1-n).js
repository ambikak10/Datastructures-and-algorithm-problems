var findDuplicates = function (nums){

  let len = nums.length; // n = len-1 since one of them is duplicate

  let sumOfGivenIntegers = 0;

  sumOfNIntegers = [(len - 1) * len] / 2;

  nums.forEach(function (item) {
    sumOfGivenIntegers = sumOfGivenIntegers + item;
  });
  
  return sumOfGivenIntegers - sumOfNIntegers;
};
 
console.log(findDuplicates([1,2,3,3,4]));
//console.log(findDuplicates([2, 2, 2, 2, 2])); // doesn't work for this example
// O(n)


/* Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one duplicate number in nums, return this duplicate number.

Follow-ups:

How can we prove that at least one duplicate number must exist in nums? 
Can you solve the problem without modifying the array nums?
Can you solve the problem using only constant, O(1) extra space?
Can you solve the problem with runtime complexity less than O(n2)?

*/
var findDuplicate = function(nums) {
 
    return nums.find((e,i)=> nums.indexOf(e)!=i);

};
 console.log(findDuplicate([2, 2, 2, 2, 2]));