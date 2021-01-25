var subarraySumNegative = function (nums, sum) {
  var map = {};
  var curr_sum = 0;
  var start = 0;
  var end = -1;
  let key;
  n = nums.length;
  for (var i = 0; i < n; i++) {
    curr_sum = curr_sum + nums[i];
    if (curr_sum - sum === 0) {
      // console.log("Subarray is from index", start, i);
      start = 0;
      end = i;
      break;
    }
    key = curr_sum - sum;
    if (key in map) {
      start = map[key] + 1;
      end = i;
      //break;
    }
    map[curr_sum] = i;
  }

  if (end === -1) {
    console.log("No subarray found");
  } else {
    console.log("Subarray found between indexes " + start, end);
  }
};

 subarraySumNegative([10, 3, -2, -20, 10], -10)
//subarraySumNegative([10, 50, 50], 60)
// o(n)
