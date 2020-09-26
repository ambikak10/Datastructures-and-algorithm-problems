// var arrangeCoins = function (n) {
// var i=1;

//     while(true){
//       if ((i * (i + 1)) / 2 > n) 
//         return i - 1;
//       else
//         i++;
//     }
// };

// console.log(arrangeCoins(10));

var arrangeCoins = function (n) {
  let ans = Math.sqrt(1 + 8 * n) - 1;
  
  ans /= 2;
  console.log(ans);

  return ~~ans;
};
 console.log(arrangeCoins(8));