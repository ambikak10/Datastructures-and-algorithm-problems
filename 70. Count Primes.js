//Time : o(n)?
var countPrimes = function(n) {
  var count = 0;
  for(var i = 1; i < n; i++) {
    if (isPrime(i)) count++;
  }
  return count;
}

var isPrime =function(num) {
  if (num <= 1) return false;
  // Loop's ending condition is i * i <= num instead of i <= sqrt(num)
  // to avoid repeatedly calling an expensive function sqrt().
  for (var i = 2; i * i <= num; i++) {
    console.log(i*i)
    if (num % i == 0) return false;
  }
  return true;
}
console.log(countPrimes(8));

