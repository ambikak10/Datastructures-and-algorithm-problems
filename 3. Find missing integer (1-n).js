// Given: n-1 items from 1-n, one number missing ,
// so n-1 is the length of array.array. n(n-1)/2 formula to be applied.
// since array is contiguous, n will be maximum no. So, if length = n-1 , then n=length+1
// here, it will be n-1+1=n
var missingInteger = function (arr) {
  let len = arr.length;
  // n = len + 1;
  let sumOfNIntegers = [(len + 1) * (len + 2)] / 2;
  let sumOfGivenIntegers = 0;
  arr.forEach(function (item) {
    sumOfGivenIntegers += item;
  });
  return sumOfNIntegers - sumOfGivenIntegers;
};
// console.log(missingInteger([1, 3, 4, 5]))
//  Time Complexity = o(n)
