// o(n) 
// o(n)
var lengthOfLongestSubstring = function (s) {
  var i;
  var n = s.length;
  //console.log(n);
  if(n===0){
    return 0;
  }
  var st = 0;
  var currlen;
  var maxlen = 0;
  // var start;
  var pos = {};

  pos[s[0]] = 0;

  for (i = 1; i < n; i++) {
  
    if (s[i] in pos){
      // If this character is present in hash then
      // this character has previous occurrence,
      // check if that occurrence is before or after
      // starting point of current substring.
      console.log(pos);
      if (pos[s[i]] >= st) {
        currlen = i - st;
        if (maxlen < currlen) {
          maxlen = currlen;
          //start = st;
        }
        // Next substring will start after the last
        // occurrence of current character to avoid
        // its repetition.
        st = pos[s[i]] + 1;
      }

      // Update last occurrence of
      // current character.
      pos[s[i]] = i;
    } else {
      pos[s[i]] = i;
    } 
  }

  // Compare length of last substring with maxlen and
  // update maxlen and start accordingly.
  if (maxlen < i - st) {
    // console.log(i, st);
    maxlen = i - st;
    //start = st;
    //console.log(maxlen);
  }

  // The required longest substring without
  // repeating characters is from str[start]
  // to str[start+maxlen-1].
  // console.log(s.substring(start, start + maxlen).length);
  // return s.substring(start, start + maxlen);
  return maxlen;

};
// console.log(lengthOfLongestSubstring("au"));
console.log(lengthOfLongestSubstring("bamikaxyzbo"));
//console.log(lengthOfLongestSubstring("prasadyaji"));
//console.log(lengthOfLongestSubstring("abcbbad"));
