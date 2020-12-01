// Space optimized CPP implementation of longest 
// common substring. 
//Time Complexity: O(m*n)
// Auxiliary Space: O(n)
var LCSubStr = function(X, Y) 
{
  var m = X.length;
  var n = Y.length;

  var result = 0;

  // var end;

  var len = [[], []];
  // Variable to represent which row of
  // matrix is current row.
  var currRow = 0;

  // For a particular value of i and j,
  // len[currRow][j] stores length of longest
  // common substring in string X[0..i] and Y[0..j].
  for (var i = 0; i <= m; i++) {
    for (var j = 0; j <= n; j++) {
      if (i == 0 || j == 0) {
        len[currRow][j] = 0;
      } else if (X[i - 1] == Y[j - 1]) {
        len[currRow][j] = len[1 - currRow][j - 1] + 1;
        if (len[currRow][j] > result) {
          result = len[currRow][j];
          // end = i - 1;
        }
      } else {
        len[currRow][j] = 0;
      }
    }
    currRow = 1 - currRow;
  }
  // If there is no common substring, print -1.
  // if (result == 0) {
  //     return -1;
  // }

  // Longest common substring is from index
  // end - result + 1 to index end in X.
  //     return X.substr(end - result + 1, result);
  // }
  return result;
}

  
console.log(LCSubStr('GeeksforGeeks', 'GeeksQuiz'));
  
console.log(LCSubStr("SkyPink", "SkyBlue"));