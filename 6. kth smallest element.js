var kthSmallest = function (arr, k) {
  arr = arr.sort(function (a, b) {
    return a - b;
  });
  console.log(arr);
  return arr[k - 1];
};
// console.log(kthSmallest([12, 3, 5, 7, 19], 3));

// o(NlogN)
