// Time Complexity = O(2n);
var missingNumber = function (array) {
  let a = [];
  array.forEach(function (item) {
    a[item] = true;
  });
  for (i = 0; i <= a.length; i++) {
    if (!a[i]) {
      return i;
    }
  }
};
console.log(missingNumber([0,1,2,3,4]));
