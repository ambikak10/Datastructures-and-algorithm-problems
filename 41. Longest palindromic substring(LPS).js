// o(n^2) runtime , o(1) space
var longestPalindrome = function (s) {
  maxLength = 1;
  // var start = 0;
  var length = s.length;
  var low = 0;
  var high = 0;

  for (var i = 1; i < length; i++) {
    low = i-1;
    high = i;

    //Find the longest even length palindrome with center
    while (low >= 0 && high < length && s[low] === s[high]) {
      if (high - low + 1 > maxLength) {
        // start = low;
        maxLength = high - low + 1;
      }
        low--;
        high++;
    }
    // Find the longest odd length palindrome with center
    low = i-1;
    high = i+1;
    while (low >= 0 && high < length && s[low] === s[high]) {
      if (high - low + 1 > maxLength) {
        // start = low;
        maxLength = high - low + 1;
      }
        low--;
        high++;
    }
  }
  return maxLength;
  // s.substring(start, start + maxLength);
};
console.log(longestPalindrome("cachd"));

//O(n^3) runtime and o(n) space
//Dynamic programming
// var longestPalindrome = function (st) {
//   var n = st.length;
//   var table = [];

//   for (var i = 0; i < n; i++) {
//     table.push(new Array(n).fill(0));
//   }
//   var maxLength = 1;

//   i = 0;
//   while (i < n) {
//     table[i][i] = true;
//     i = i + 1;
//   }
//   // check for sub-string of length 2.
//   var start = 0;
//   var i = 0;
//   while (i < n - 1) {
//     if (st[i] === st[i + 1]) {
//       table[i][i + 1] = true;
//       start = i;
//       maxLength = 2;
//     }
//     i = i + 1;
//   }

//   // Check for lengths greater than 2.
//   // k is length of substring

//   var k = 3;
//   // Fix the starting index
//   while (k <= n) {
//     i=0;
//     while (i < (n - k + 1)) {
//       // Get the ending index of substring from
//       // starting index i and length k
//       var j = i + k - 1;

//       // checking for sub-string from ith index to
//       // jth index iff str[i+1] to str[j-1] is a
//       // palindrome
//       if (table[i + 1][j - 1] && st[i] === st[j]) {
//         table[i][j] = true;

//         if (k > maxLength) {
//           start = i;
//           maxLength = k;
//         }
//       }
//        i = i + 1;
//     }
//     k = k + 1;
//   }
//   console.log(st.substring(start, start + maxLength - 1));
//   // return length of LPS
//   return maxLength;
// };
// console.log(longestPalindrome("forgeeksskeegfor"));
