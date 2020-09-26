//time: o(n)
//space: o(n)
var plusOne = function (digits) {
  var ans = []
    , add = 0
    , len = digits.length;

  digits[len - 1]++;

  for (var i = len - 1; i >= 0; i--) {
    console.log(digits);
    var sum = digits[i] + add;
    ans[i] = sum % 10;
    console.log(ans[i]);
    add = ~~(sum / 10);
  }

  if (add)
    ans.unshift(add);

  return ans;
};
console.log(plusOne([3, 9]));

// var plusOne = function (digits) {
//   digits = digits.join('');
//   //console.log(typeof(digits));
//   digits = BigInt(digits);
//   //console.log(typeof (digits));
//   digits++;

//   digits = digits.toString().split('');
//   console.log(typeof(digits));
//   var realDigits = digits.map(Number);
//   console.log(typeof (realDigits));
//   return realDigits;
// }
// console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));