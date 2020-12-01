//Dynamic programming
// o(m*n)??
// o(m*n)
function LCS(text1, text2) {
  var m = text1.length,
    n = text2.length,
    C = [],
    i,
    j;

  for (i = 0; i <= m; i++) C.push([0]);
  for (j = 0; j < n; j++) C[0].push(0);

  for (i = 0; i < m; i++) {
    for (j = 0; j < n; j++) {
      C[i + 1][j + 1] =
        text1[i] === text2[j]
          ? C[i][j] + 1
          : Math.max(C[i + 1][j], C[i][j + 1]);
    }
  }
  // RECURSION
  //   return (function bt(i, j) {
  //     if (i * j === 0) {
  //         return '';
  //     }
  //     if (text1[i-1] === text2[j-1]) {
  //         return bt(i-1, j-1) + a[i-1];
  //     }
  //     return (C[i][j-1] > C[i-1][j])
  //             ? bt(i, j-1)
  //             : bt(i-1, j);
  // }(m, n));
  var lcs = "";
  i = m, 
  j = n;
  while (i > 0 && j > 0) {
    // If current character in a[] and b are same, then
    // current character is part of LCS
    if (text1[i - 1] == text2[j - 1]) {
      lcs = text1[i - 1] + lcs; // Put current character in result
      i--;
      j--; // reduce values of i, j and index
    }

    // If not same, then find the larger of two and
    // go in the direction of larger value
    else if (C[i - 1][j] > C[i][j - 1]) i--;
    else j--;
  }
  console.log(lcs)
  return lcs.length;
}
console.log(LCS("zxabcdezy", "yzabcdezx"));