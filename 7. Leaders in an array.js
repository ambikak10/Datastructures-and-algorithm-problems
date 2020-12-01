var leaders = function (arr) {
  n = arr.length;
  // var a = [];
  var maxn = -Number.MAX_VALUE;
  // console.log(-Number.MAX_VALUE)
  for (var i = n - 1; i >= 0; i--) {
    if (arr[i] > maxn) {
      maxn = arr[i];
      // a.push(maxn);
      console.log(maxn);
    }
  }
  // return a;
};

// leaders([16, 17, 4, 3, 5, 2]);
