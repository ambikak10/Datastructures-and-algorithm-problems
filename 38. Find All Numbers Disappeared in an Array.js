 findDisappearedNumbers = function(nums) {
   let result =[];
   for(var i= 0; i< nums.length; i++){
    var temp = Math.abs(nums[i]) - 1; 
    nums[temp] = nums[temp] > 0 ? -nums[temp]
           : nums[temp];
   }
   for(var i=0; i< nums.length; i++){
     if(nums[i] > 0){
       result.push(i+1);

     }
   }
   return result;
 }
 console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));