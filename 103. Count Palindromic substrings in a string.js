// Given a string, your task is to count how many palindromic substrings in this string.

// The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.


var countSubstrings = function (s) {
  var count1 = 0;

  function count(left, right) {
    while (left > -1 && right < s.length && s[left] == s[right]) {
      count1++;
      left--;
      right++;
    }
  }

  for (var i = 0; i < s.length; i++) {
    count(i, i);
    count(i, i + 1);
  }
  return count1;
};
console.log(countSubstrings('abc'));


/* Input: "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa". */

i=5;
console.log(i++)
console.log(i);