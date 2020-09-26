var substring = function (a) {
  var str = "";
  var n = a.length;
  for (var len = 1; len <= n; len++) {
    for (var i = 0; i <= n - len; i++) {
      var j = i + len - 1;
      str = "";
      for (var k = i; k <= j; k++) {
        str = str + a[k];
      }
      console.log(str);
      console.log();
      
    }
  }
  return max;
};
console.log(substring(["a", "b", "c", "d"]))

// O(n*n)
