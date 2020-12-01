var titleToNumber = function (s) {
  var obj = {};
  var j = 1;
  for (var i = 0; i < 26; i++) {
    obj[String.fromCharCode(65 + i)] = j++;
  }
  // console.log(obj);
  if (s.length <= 7) {
    var sum = obj[s[0]];
    // console.log(sum);
    for (var k = 1; k < s.length; k++) {
      sum = sum * 26 + obj[s[k]];
      // console.log(sum);
    }
  }
  return sum;
};
console.log(titleToNumber("CFDGSXM"));
