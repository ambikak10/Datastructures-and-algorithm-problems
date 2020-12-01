// o(n) + o(m) + o(mlogm) + o(n)
var frequency = function (a) {
  var o1 = {};
  var o2 = {};
  let n = a.length;
  var sortable = [];
  var arr = [];
  for (var i = 0; i < n; i++) {
    if (a[i] in o1) {
      o2[a[i]]++;
    } else {
      o1[a[i]] = i;
      o2[a[i]] = 1;
    }
  }
  for (var item in o1) {
    sortable.push([o1[item], o2[item]]);
  }
  sortable.sort(function (a, b) {
    if (b[1] === a[1]) {
      return a[0] - b[0]; //sort index ascending
    } else return b[1] - a[1]; //sort frequency descending
  });
  for (var i = 0; i < sortable.length; i++) {
    let count = sortable[i][1];
    while (count !== 0) {
      arr.push(a[sortable[i][0]]);
      count--;
    }
  }
  return arr;
};

console.log(frequency([2, 5, 2, 8, 5, 6, 8, 8]));
