// Time complexity: O(n)
// Auxiliary Space: O(1)
//d is how many times to be rotated
var leftRotate = function (arr, d) {
  var n = arr.length;
  d = d % n;
  console.log(d);
  g_c_d = gcd(d, n);

  for (i = 0; i < g_c_d; i++) {
    console.log(g_c_d);
    temp = arr[i];
    j = i;
    while (true) {
      k = j + d;
      if (k >= n) k = k - n;
      if (k == i) break;
      arr[j] = arr[k];
      j = k;
    }
    arr[j] = temp;
  }
  return arr;
};
var gcd = function (a, b) {
  if (b == 0) return a;
  else {
    return gcd(b, a % b);
  }
};
console.log(leftRotate([1, 2, 3, 4, 5, 6], 5));
