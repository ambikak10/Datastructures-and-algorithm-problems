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

var sort = function(ar){
  var cnt0=0, cnt1=0, cnt2=0;
  for (let i = 0; i < ar.length; i++) {
    switch (ar[i]) {
      case 0:
        cnt0++;
        break;
      case 1:
        cnt1++;
        break;
      case 2:
        cnt2++;
        break;
    }
  }
  
  var i = 0;

  while (cnt0 > 0) {
 
    ar[i] = 0;
    i++;
       console.log(i);
    cnt0--;
  }

  while (cnt1 > 0) {
    ar[i++] = 1;
    cnt1--;
  }

  
  while (cnt2 > 0) {
    ar[i++] = 2;
    cnt2--;
  }
return ar;
}

console.log(sort([1,1,0,0,0,0,2]))