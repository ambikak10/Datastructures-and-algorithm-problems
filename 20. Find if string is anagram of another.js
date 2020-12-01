var permutation = function (s, t) {
  // console.log(a.length)
  var dictionary = {};
  if (s.length === t.length) {
    for (var i = 0; i < s.length; i++) {
      if (s[i] in dictionary) {
        dictionary[s[i]]++;
      } else {
        dictionary[s[i]] = 1;
      }
    }
    for (var i = 0; i < t.length; i++) {
      if (t[i] in dictionary) {
        if (dictionary[t[i]] > 1) {
          dictionary[t[i]]--;
        } else {
          delete dictionary[t[i]];
        }
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
  if (Object.keys(dictionary).length === 0) {
    return true;
  } else {
    return false;
  }
};
console.log(permutation('cat', 'act'));
// o(2n)
