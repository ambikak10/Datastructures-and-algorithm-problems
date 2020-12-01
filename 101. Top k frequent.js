/* Given a non-empty array of integers, return the k most frequent elements.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]  */
var topKFrequent = function (nums, k) {
  let map = new Map();
  for (let v of nums) {
    if (!map.has(v)) {
      map.set(v, 1);
    } else {
      map.set(v, map.get(v) + 1);
    }
  }
   console.log(map)
  let array = [];
  for (let [key, value] of map) {
    //console.log([key, value]);
    array.push([key, value]);
  }
  array.sort(function (a, b) {
    return b[1] - a[1];
  });
  let result = [];
  for (let i = 0; i < k; i++) {
    result.push(array[i][0]);
  }
  return result;
};

console.log(topKFrequent([2, 2, 1, 1, 2, 3], 2));

console.log(NaN == NaN)