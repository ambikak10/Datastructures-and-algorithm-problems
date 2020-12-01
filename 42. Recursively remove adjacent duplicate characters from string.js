// //Iterative approach
// // O(n) runtime and o(n) space
// // removeAdjacentDuplicates = function (a) {
// //   var arr = [];
// //   var prev;
// //   for (var i = 0; i < a.length; i++) {
// //     if (a[i] === prev) {
// //       while (a[i] === a[i + 1]) {
// //         i++;
// //       }
// //       arr.pop();
// //       prev = arr[arr.length - 1];
// //     } else {
// //       arr.push(a[i]);
// //       prev = a[i];
// //     }
// //   }
// //   return arr;
// // };
// // console.log(removeAdjacentDuplicates("qpaaaaadaaaaadprq"));

// //Recursive approach
removeAdjacentdoubles = function (string, last_removed) {
  console.log(string, last_removed);
  if (string.length === 0 || string.length === 1) {
    return string;
  }
  if (string[0] === string[1]) {
    last_removed = string.charCodeAt(0);
    while (string.length > 1 && string[0] === string[1]) {
      string = string.substring(1, string.length);
    }
    string = string.substring(1, string.length);
    return removeAdjacentdoubles(string, last_removed);
  }

  // string = string.substring(1, string.length);
  var rem_str = removeAdjacentdoubles(
    string.substring(1, string.length),
    last_removed
  );
  console.log(rem_str, string, last_removed);
  if (rem_str.length !== 0 && rem_str[0] === string[0]) {
    console.log("1", rem_str, string);
    last_removed = string.charCodeAt(0);
    return rem_str.substring(1, rem_str.length);
  }
  if (rem_str.length === 0 && last_removed === string.charCodeAt(0)) {
    console.log("2");
    return rem_str;
  }
  console.log("3");
  return string[0] + rem_str;
};

// console.log(removeAdjacentdoubles("abbdc", 0));

// console.log(removeAdjacentdoubles("qpaaaaadaaaaadprq", 0));
var removeDuplicates = function (S) {
  let j = 1, prev = '';
  let newString = "";
  for (var i = 0; i < S.length; i++) {
    if (S[i] === S[j]) {
      prev = S[i];
    } else {
      if (S[i] !== prev)
        newString += S[i];
        prev='';
    }
    j++;
  }
  //console.log("S is :",S);
  if (S !== newString) {
  //console.log("newstring is :", newString);
    return removeDuplicates(newString);
  }
  else return newString;
};

console.log(removeDuplicates("qpaaaaadaaaaadprq"));
// >o(n)
//o(n)