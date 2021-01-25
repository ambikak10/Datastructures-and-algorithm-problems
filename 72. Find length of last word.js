//Time: o(n)
//o(1)

var lastWordLength = function (s) {
  s = s.trim();
  var str = s.replace(/\s/g, "");
  //  console.log(s);
  if (str.length === 0) {
    return 0;
  }
  for (var i = s.length-1; i >= 0; i--) {
    if (s[i] == " ") {
      console.log(s.length);
      console.log(i);

      return s.length - i - 1;
    }
    if (i === 0) return s.length;
  }
};
console.log(lastWordLength("I am Ambika"));
console.log(lastWordLength("Hello World"));

