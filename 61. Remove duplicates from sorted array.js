// Time: o(n) * o(n) ?
// Space: o(1)
var removeDuplicates = function (nums) {
  var ans = 0;
  for (var i = nums.length - 1; i >= 0; i--) {

    if (nums[i] == nums[i + 1])
      nums.splice(i, 1);
    else
      ans++;

  }
  return ans;
};
//console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// Time: o(n)
//o(1): space
var rem = function(arr){
  let n = arr.length;
   if(n===0 || n===1) return n;
   j=0;
     for(var i=0; i < n-1; i++){
       if(arr[i] !== arr[i+1]){
         arr[j] = arr[i];
         j=j+1;
       }
     }
       arr[j] = arr[n-1];
       j=j+1;
       return j;
    
}
console.log(rem([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

