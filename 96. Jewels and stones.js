// You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

var numJewelsInStones = function(J, S) {
    var count = 0;
    for(var i=0; i < J.length; i++) {
      for(var j=0; j < S.length; j++) {
        if(J[i] === S[j]) {
          count++;
        }      
      }
    }
    return count;
};

console.log(numJewelsInStones("aA", "aAAbbbb"))