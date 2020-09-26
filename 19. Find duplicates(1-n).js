var findDuplicates = function (nums) {
  let len = nums.length;
  // n = len-1 since one of them is duplicate
  let sumOfGivenIntegers = 0;
  sumOfNIntegers = [(len - 1) * len] / 2;
  nums.forEach(function (item) {
    sumOfGivenIntegers = sumOfGivenIntegers + item;
  });
  return sumOfGivenIntegers - sumOfNIntegers;
};
// console.log(findDuplicates([1,2,3,3,4]));

// O(n)
