// //o(n)

var NGE = function (a) {
  var s = [];
  var element = 0;
  var next = 0;
  s.push(a[0]);
  for (var i = 1; i < a.length; i++) {
    next = a[i];
    if (s.length !== 0) {
      element = s.pop();
      while (element < next) {
        console.log(element + " ---> " + next);
        if (s.length === 0) {
          break;
        }
        element = s.pop();
      }
      if (element > next) {
        s.push(element);
      }
    }
    s.push(next);
  }
  while (s.length !== 0) {
    element = s.pop();
    next = -1;
    console.log(element + " ---> " + next);
  }
};
NGE([13, 3, 6, 12]);

// o(2n)
// Print in order

// var nge = function(nums) {
//   var s=[];
//   s[nums.length-1] = -1;
//   for(var i = nums.length-2; i>=0 ;i--){
//     if(nums[i] < nums[i+1]){
//        s[i] = nums[i+1];
//     }
//     else if(nums[i] >= nums[i+1]){
//       k=i;
//       while(nums[k] < s[i+1]){
//         s[k] = s[i+1];
//         i++;
//       }
//       } else {
//         s[i] = -1;
//         console.log(i)
//     }
//   }
//   return s;
// }
// console.log(nge([6, 3, 5, 6, 7, 12]));
// // o(2n) runtime & o(n) extra space

var nge = function (nums) {
  var s = [];
  s[nums.length - 1] = -1;
  for (var i = nums.length - 2; i >= 0; i--) {
    s[i] = -1;
    if (nums[i] < nums[i + 1]) {
      s[i] = nums[i + 1];
    } else {
      var k = i;
      while (k < nums.length - 1) {
        if (nums[i] < s[k + 1]) {
          s[i] = s[k + 1];
          break;
        }
        k++;
      }
    }
  }
  return s;
};
console.log(nge([1, 2, 3]));
