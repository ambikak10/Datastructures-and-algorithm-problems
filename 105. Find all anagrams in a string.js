// Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

var findAnagrams = function (s, p) {
  let res = [];
  if (p.length > s.length) {
    return res;
  }

  let map = new Map();

  for (let c of p) {
    map.set(c, (map.get(c) | 0) + 1);
  }
console.log(map)
  let begin = 0,
    end = 0,
    counter = map.size;
    console.log(counter)

  while (end < s.length) {
    let c = s.charAt(end);

    if (map.has(c)) {
      map.set(c, map.get(c) - 1);
      if (map.get(c) === 0) {
        counter--;
      }
    }
    end++;
    while (counter === 0) {
      let d = s.charAt(begin);
      if (map.has(d)) {
        map.set(d, map.get(d) + 1);
        if (map.get(d) > 0) {
          counter++;
        }
      }
      if (end - begin == p.length) {
        res.push(begin);
      }
      begin++;
    }
  }
console.log(map)
  return res;
};

console.log(findAnagrams("cbaebabacd", "abc"));

/* Input:
s: "cbaebabacd" p: "abc"

Output:
[0, 6]

Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc". */