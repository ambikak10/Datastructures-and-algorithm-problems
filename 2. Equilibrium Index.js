var equilibriumIndex = function (nums) {
  sum = 0;
  leftsum = 0;
  for (var i = 0; i <= nums.length - 1; ++i) {
    //  console.log(i, sum);
    sum = sum + nums[i];
    //  console.log(i);
  }
  for (i = 0; i <= nums.length - 1; ++i) {
    //  console.log(i, sum, leftsum);
    sum = sum - nums[i];
    if (sum === leftsum) return i;
    leftsum += nums[i];
  }
  /* If no equilibrium index found, then return 0 */
  return -1;
};
// console.log(equilibriumIndex([ -7, 1, 5, 2, -4, 3, 0]));
//O(2n)

// i = 10;
// console.log(i++);
// console.log(i);
// console.log(++i)
