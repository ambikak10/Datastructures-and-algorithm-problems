// var maxSubarrayProduct = function (nums) {
//   n = nums.length;
//   var max_ending_here = 1;
//   var min_ending_here = 1;
//   var max_so_far = 1;
//   var flag = 0;
 
//   if(nums.length === 1){
//     return nums[0];
//   } 
//   for(var i=0; i<n;i++) {
//     if(nums[i] > 0){
//       max_ending_here = max_ending_here * nums[i];
//       min_ending_here = Math.min((min_ending_here * nums[i]), 1)
//       flag = 1;
//       }else if(nums[i] === 0){
//         max_ending_here = 1;
//         min_ending_here = 1;
//       } else {
//         temp = max_ending_here;
//         max_ending_here = Math.max(min_ending_here * nums[i], 1);
//         min_ending_here = temp *nums[i];
//       }
//       if (max_so_far < max_ending_here){ 
//               max_so_far = max_ending_here;
//       } 
      
//   } 
        
//     if (flag === 0 && max_so_far === 1) {
//         return 0;
//     }
//     return max_so_far;
// } 

  
// console.log(maxSubarrayProduct([-2, 0, -1]));

// test cases [-2, 3, -4]; [0,2] [3,-1,4] [-2, 3, -4] [-2, 0, -1] [-3, -1, -1]

// Time complexity : O(n)

var maxProduct = function (nums) {
  var ans = -Infinity,
    res = 1,
    tmp = 1;

  nums.forEach(function (item) {
    var _res = res * item,
      _tmp = tmp * item;

    ans = Math.max(ans, _res, _tmp);

    res = Math.max(_res, _tmp, 1);
    tmp = Math.min(_res, _tmp, 1);
  });

  return ans;
};
console.log(maxProduct([-2, 0, -1 ]));
// Time complexity : O(n)