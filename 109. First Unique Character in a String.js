var firstUniqChar = function (s) {
  
  console.log(s.indexOf(s[0]));
  console.log(s.lastIndexOf(s[0]));

  for (i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return i;
    }
  }
  return -1;
};
console.log(firstUniqChar('loveleetcode'));

var firstUniqChar = function(s){
    var map=new Map();
    for(i=0;i<s.length;i++){
         if(map.has(s[i])){
             map.set(s[i],2);
         }
         else{
             map.set(s[i],1);
         }
     }

    for(i=0;i<s.length;i++){
        if(map.has(s[i]) && map.get(s[i])===1){
            return i;
        }
    }
    return -1;
 } ;