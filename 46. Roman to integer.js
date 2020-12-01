var romanToInt = function(s) {
    var a = {};
    a.I = 1;
    a.X = 10;
    a.D = 500;
    a.M = 1000;
    a.V = 5;
    a.C = 100;
    a.L = 50;
    sum = 0;
    for(var i=0; i < s.length; i++){
        var item = a[s[i]];
        console.log(item);
        var nextItem = i+1 === s.length ? 0 : a[s[i+1]];
        console.log(nextItem);
      
        if(nextItem > item ){
        sum  = sum + nextItem - item;
        i++;
        } else {
          sum = sum + item;
        //console.log(sum);
        }
     }
       return sum;
};
console.log(romanToInt("MCMIV"));
//o(n)
//o(1): No extra space required