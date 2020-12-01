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
  //console.log(ans);

  return ~~ans;
};
 console.log(arrangeCoins(8));

//  You have a total of n coins that you want to form in a staircase shape, where every k-th row must have exactly k coins.

//n(n+1)/2 = x --> no.of coins, n --> is the no of rows
//n*n + n - 2x
//n = -1 + sqrt(1+8x)  /  2