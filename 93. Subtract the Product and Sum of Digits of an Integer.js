var subtractProductAndSum = function(n) {
  var product = 1;
  var sum = 0;
  var subtract;
  while(n !== 0){
  product = product * (n % 10);
  sum = sum + (n % 10);
  n = ~~(n / 10);
  }
  console.log(product);
  console.log(sum)
  return product - sum;
};
console.log(subtractProductAndSum(4421));