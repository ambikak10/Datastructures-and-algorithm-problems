var shuffle = function(nums, n) {
  var a=[];
  var x=0;
  for(var i=0; i<n; i++){
     a[x] = nums[i];
     x++;
     a[x]= nums[i+n];
     x++;
  }
return a;
};
console.log(shuffle([1,2,3,4,4,3,2,1], 4)); //[1,4,2,3,3,2,4,1]






































  // var len = nums.length / n
  // for(var j=0; j<len; j++){
  //   a.push(nums[j])
  //   a.push(nums[j+n])
  // }
  // return a;