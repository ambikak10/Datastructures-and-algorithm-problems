var permutation = function (a, b) {
  // console.log(a.length)
  var dictionary = {};
  if (a.length === b.length) {
    for (var i = 0; i < a.length; i++) {
      if (a[i] in dictionary) {
        dictionary[a[i]]++;
      } else {
        dictionary[a[i]] = 1;
      }
    }
    for (var i = 0; i < b.length; i++) {
      if (b[i] in dictionary) {
        if (dictionary[b[i]] > 1) {
          dictionary[b[i]]--;
        } else {
          delete dictionary[b[i]];
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
// console.log(permutation('cat', 'asd'));
// o(2n)
