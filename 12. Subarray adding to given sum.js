// var subarrayGivenSum = function (arr, sum) {
//   let start = 0;
//   let curr_sum = arr[0];
//   let i = 1;
//   let n = arr.length;
//   while (i < n) {
//     while (curr_sum > sum && start < i - 1) {
//       curr_sum = curr_sum - arr[start];
//       start = start + 1;
//       console.log(start)
//     }
//     if (curr_sum === sum) {
//       console.log(start);
//       console.log("Found btw indexes", start, i - 1);
//       return true;
//     }
//     if (curr_sum < sum) {

//       curr_sum = curr_sum + arr[i];
//     }
//     i = i + 1;
//     //console.log(i);
//   }
//   return console.log("No subarray found");
// };
// console.log(subarrayGivenSum([1, 4, 20, 3, 10, 5], 33))

//Time Complexity = O(n)

var subarrayGivSum = function (arr, sum) {
  let start = 0;
  let curr_sum = arr[0];
  let n = arr.length;
  for(var i=1; i < n; i++){
    //console.log(i);
    while (curr_sum > sum && start < i - 1) {
      console.log(i);
      curr_sum = curr_sum - arr[start];
      start = start + 1;
    }
    if (curr_sum === sum) {
      //console.log(i);
      console.log("Found btw indexes", start, i - 1);
      return true;
    }
    if (curr_sum < sum) {
      curr_sum = curr_sum + arr[i];
    }
    //console.log(i);
    // i = i + 1;
    // console.log(i);
  }
  return console.log("No subarray found");

  // var currsum = arr[0];
  // var start = 0;
  // for (var i = 1; i < arr.length; i++) {
  //   if (currsum === sum) {
  //     console.log(start, i-1);
  //     return true;
  //   } else if (currsum < sum) {
  //     currsum = currsum + arr[i];
  //   } else {
  //     i--;
  //     while (currsum > sum) {
  //       currsum = currsum - arr[start];
  //       start++;
  //     }
  //   }
  // }
  // return true;
};
//console.log(subarrayGivenSum([1, 4, 20, 3, 10, 5], 33));
 console.log(subarrayGivSum([1, 4, 20, 3, 10, 5,12,13,14], 33));
