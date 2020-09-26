//Palindrome/Reverse number
var reverse = function (x) {
  var min = -(1 << 30) * 2;
  var max = (1 << 30) * 2 - 1;
  var rev;
  var arr = x.toString(2).split('');
  console.log(arr);
  if (x < 0)
    arr.shift();
  rev = arr.reverse().join('');
  // if(x < 0)
  // rev = rev*-1;
  // if(rev === x){
  //   console.log("It's a palindrome");}
  // else {
  //   console.log("No");}
  // if(rev < min || rev > max )
  //     return 0;
  // else
  return rev;

}
console.log(reverse(11100));


var sum = [];
sum[0] = 1;
for (var i = 1; i <= 32; i++)
  sum[i] = 2 * sum[i - 1];

var reverseBits = function (n) {
  var tmp = n.toString(2);
  for (var i = tmp.length; i <= 31; i++)
    tmp = '0' + tmp;
  var ans = 0;
  for (var i = 0, len = tmp.length; i < len; i++) {
    if (tmp[i] === '1')
      ans += sum[i];
  }
  return ans;
};