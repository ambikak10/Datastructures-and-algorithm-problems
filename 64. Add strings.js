// //o(n)?  
// space: o(2) ?
var addStrings = function (num1, num2) {
  let [i, j] = [num1.length, num2.length];
  let ans = '';
  let add = 0;

  i -= 1, j -= 1;
  for ( ; i >= 0 || j >= 0; i--, j--) {
    let a = i >= 0 ? num1[i] : 0;
    console.log(a);
    let b = j >= 0 ? num2[j] : 0;
    console.log(b);
    let sum = a + b + add;
    ans = sum % 10 + ans;
    add = ~~(sum / 10);
  }

  (ans = add + ans);
  return ans;
};
console.log(addStrings('239', '103'));


// var v = 2 && 3
// console.log(v)
// let a = 1;
// let b = 0;
// let ans ='6';
// add=0;
// let sum = a+b+add;
// ans = sum % 10 + '';
// console.log(ans);