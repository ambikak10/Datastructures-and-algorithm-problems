// o(logn) 
// space : o(1)

var isPerfectSquare = function (num) {
  var a = 0
    , b = num;

  while (a <= b) {
    var mid = (a + b) >> 1
    console.log(mid)
      , ans = mid * mid;

    if (ans > num)
      b = mid - 1;
    else if (ans < num)
      a = mid + 1;
    else
      return true;
  }

  return false;
};
console.log(isPerfectSquare(14));

console.log(5>>1)

//right shift by 1 gives mid number
