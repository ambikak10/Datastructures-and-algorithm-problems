const groupAnagrams = (strs) => {
  const map = {};

  for (let str of strs) {
    const key = [...str].sort().join("");
    //console.log(key)

    if (!map[key]) {
      map[key] = [];
    }

    map[key].push(str);
    console.log(str)
    console.log(map);
  }

  return Object.values(map);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

console.log(groupAnagrams([""]));

console.log(groupAnagrams(["a"]));