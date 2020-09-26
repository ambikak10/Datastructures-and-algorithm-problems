// Time:
// Space: 
var isHappy = function (n) {
  hash = [];
  while (n) {
    if (n === 1) return true;
    if (hash[n] === true) return false;
    hash[n] = true;
    n = add(n);
    console.log(n)
  }
  function add(n) {
    ans = 0;
    while (n) {
      ans += (n % 10) * (n % 10)
      n = ~~(n / 10)
    }
    return ans;
  }
}
console.log(isHappy(20));