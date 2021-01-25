var removeDuplicateCharacters = function(s){
  var str= '';
  var hash = {};
      for (var i = 0; i < 26; i++) {
      var chr = String.fromCharCode(97 + i);
      hash[chr] = false;
      }
      for(var i = 0; i < s.length; i++){
     
        if(hash[s[i]] === false){
         hash[s[i]] = true;
         str = str + s[i];
      }
      
}
return str;
      }
console.log(removeDuplicateCharacters("abbcdb")) // abcd

//o(26)? + o(n)

