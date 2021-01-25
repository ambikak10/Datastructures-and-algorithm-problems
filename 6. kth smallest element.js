var kthSmallest = function (arr, k) {
  arr = arr.sort(function (a, b) {
    return b - a;
  });
  console.log(arr);
  //return arr[k - 1];
};
 console.log(kthSmallest([12, 3, 5, 7, 19], 3));

// o(NlogN)
//If compareFunction(a, b) returns greater than 0, sort b to an index lower than a (i.e. b comes first).