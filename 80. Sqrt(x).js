var mySqrt = function (x) {
  return Math.sqrt(x);
};
console.log(mySqrt(14))


var Sqrt = function (x) {
  let left = 0;
  let right = Math.ceil(x / 2);
  console.log(right);
  let mid = 0;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (mid * mid < x) left = mid + 1;
    else if (mid * mid > x) right = mid - 1;
    else return mid;
  }
  return right;
};
console.log(Sqrt(14))