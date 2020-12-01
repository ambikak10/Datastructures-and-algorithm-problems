// o(n*n) runtime
//o(n) space
// Dynamic Programming
var lis = function (nums) {
  var n = nums.length;
  if(n===0){
    return 0;
  } else if(n===1){
    return 1;
  }
  var lis = [];
  for(var k=0; k<n; k++){
    lis.push(1);
  }
  var maxn = 0;
  for (var i = 1; i < n; i++) {
    for (j = 0; j < i; j++) {
     if (nums[i] > nums[j]) {
        lis[i] = Math.max(1 + lis[j], lis[i]);
        if (maxn < lis[i]) maxn = lis[i];
      } else {
        lis[i] = Math.max(lis[i], 1);
        if (maxn < lis[i]) maxn = lis[i];
      }
    }
  }
  console.log(lis)
  return maxn;
};
console.log(lis([4,10,4,3,8,9]));
