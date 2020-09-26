var subarrayGivenSum = function (arr, sum) {
  let start = 0;
  let curr_sum = arr[0];
  let i = 1;
  let n = arr.length;
  while (i < n) {
    while (curr_sum > sum && start < i - 1) {
      curr_sum = curr_sum - arr[start];
      start = start + 1;
    }
    if (curr_sum === sum) {
      console.log("Found btw indexes", start, i - 1);
      return true;
    }
    if (curr_sum < sum) {
      curr_sum = curr_sum + arr[i];
    }
    i = i + 1;
  }
  return console.log("No subarray found");
};
// console.log(subarrayGivenSum([1, 4, 20, 3, 10, 5], 33))

// Time Complexity = O(n)
