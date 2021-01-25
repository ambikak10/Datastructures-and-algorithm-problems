var duplChar = function(s) {
  for (i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) !== s.lastIndexOf(s[i])) {
      console.log(s[i])
    }
  }
}
duplChar('ambika')