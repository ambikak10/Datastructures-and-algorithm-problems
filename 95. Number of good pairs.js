/* Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed. */

var numIdenticalPairs = function(nums) {
  var pairs=0;
    for(var i=0; i < nums.length; i++) {
      for(var j=0; j < nums.length; j++){
        if(nums[i] === nums[j] && i < j) {
          pairs++;
        }
      }
    }
    return pairs;    
};

console.log(numIdenticalPairs([1,2,3,1,1,3]));