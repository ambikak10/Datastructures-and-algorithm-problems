function permute(a, l, r) {
  var i;
  var temp, temp1;
  if (l === r) {
    // console.log(a.join());
  } else {
    for (i = l; i <= r; i++) {
      //  console.log(a[i], a[l]);
      temp = a[l];
      a[l] = a[i];
      a[i] = temp;

      permute(a, l + 1, r);
      temp1 = a[l];
      a[l] = a[i];
      a[i] = temp1;
      //  console.log(a[i], a[l]);
    }
  }
}
var str = "ABC";
str = str.split("");
// console.log(str);
n = str.length;
// console.log(n);
permute(str, 0, n - 1);

// O(n * n!)
