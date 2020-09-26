// o(n*n) runtime
//o(n) space
// Dynamic Programming
var lis = function (arr) {
  var n = arr.length;
  var lis = [1, 1, 1, 1, 1, 1, 1, 1];
  var maxn = 0;

  for (var i = 1; i < n; i++) {
    for (j = 0; j < i; j++) {
      if (!arr[i]) arr[i] = 1;
      if (arr[i] > arr[j]) {
        lis[i] = Math.max(1 + lis[j], lis[i]);
        if (maxn < lis[i]) maxn = lis[i];
      } else {
        lis[i] = Math.max(lis[j], 1);
        if (maxn < lis[i]) maxn = lis[i];
      }
    }
  }
  return maxn;
};

console.log(lis([3, 2]));
