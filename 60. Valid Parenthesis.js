var isValid = function (s) {
  var sta = [], target = {};
  target['('] = ')';
  target['['] = ']';
  target['{'] = '}';
  for (var i = 0; i < s.length; i++) {
    if (!sta.length) sta.push(s[i]);
    else {
      if (s[i] === target[sta[sta.length - 1]])
        sta.pop();
      else
        sta.push(s[i]);
    }
  }
  return !sta.length;
};

console.log(isValid("()[{}"));
