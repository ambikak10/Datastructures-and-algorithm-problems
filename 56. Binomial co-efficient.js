// Binomial co-effiecient using recursion
//pascal's triangle

var bCk = function(n, k){
   if( k === 0 || k === n){
     return 1;
   }
  //  console.log(n,k);
  return bCk(n-1, k-1) + bCk(n-1, k);
 }
console.log(bCk(4, 2));

// Dynamic Programming
// Time Complexity: O(n*k) 
// Auxiliary Space: O(n*k)

var binomialCoeff = function(n, k){
   var C=[];
   for (i = 0; i <= n; i++) C.push([1]);
 console.log(C);
   for(var i=0; i<= n; i++){

     for(j=0; j<= Math.min(i, k); j++){

        if(j===0 || j===i){
           C[i][j] = 1;
        } else {
           C[i][j] = C[i-1][j-1] + C[i-1][j]
        }
  }
}
  return C[n][k];
}
console.log(binomialCoeff(5, 2));