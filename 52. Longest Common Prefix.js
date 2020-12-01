var longestCommonPrefix = function (strs) {
  if (!strs.length) return "";
  var prefix = strs[0];
  
  for (var i = 1; i < strs.length; i++) {
  
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
    }
  }
  return prefix;
};
console.log(longestCommonPrefix(["flower", "flow", "flight"]));

// my solution is vertical so I check first character in first string with other string then continue until break
// so each character in prefix will be checked n times so its O n*m

var longestCommonPrefix = function (strs) {
  if (!strs.length) return "";
  var lcp = '';
  for (var j = 0; j < strs[0].length; j++) {
    for (i = 1; i < strs.length; i++) {
      if (strs[0][j] !== strs[i][j]) {
        return lcp;
      }
    }
    lcp = lcp + strs[0][j];
  }
  return lcp;
}

console.log(longestCommonPrefix(["flower", "flow", "flood"]));
// O(n * m)

