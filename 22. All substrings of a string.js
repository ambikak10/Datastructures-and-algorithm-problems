var substring = function (a) {
  var str = "";
  var n = a.length;
  for (var len = 1; len <= n; len++) {// length of a substring, 
    //1 = a,b,c,d
    //2 = ab. bc, cd, da
    //3 = abc, bcd
    //4 = abcd
    for (var i = 0; i <= n - len; i++) {  //estu travese maadbeku anta, if len is 1, traverse all n items,
    //if len=2, traverse till "c", like that..
      var j = i + len - 1;
      str = "";
      for (var k = i; k <= j; k++) { //maitains, pointer btw from where to where to print
        str = str + a[k];
      }
      console.log(str);
      console.log();
      
    }
  }
};
console.log(substring(["a", "b", "c"]))

// O(n*n)
