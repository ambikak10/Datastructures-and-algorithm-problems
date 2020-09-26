var sort1sand2s = function (a) {
  var l = 0;
  var h = a.length - 1;
  var m = 0;
  var temp = 0;
  while (m <= h) {
    if (a[m] === 0) {
      console.log(l, m, h, a);
      temp = a[l];
      a[l] = a[m];
      a[m] = temp;
      l++;
      m++;
    } else if (a[m] === 1) {
      console.log(l, m, h, a);
      m++;
    } else if (a[m] === 2) {
      console.log(l, m, h, a);
      temp = a[h];
      a[h] = a[m];
      a[m] = temp;
      h--;
    }
  }
  return a;
};
// console.log(sort1sand2s([2,1,2,0,1]))
// o(n)
