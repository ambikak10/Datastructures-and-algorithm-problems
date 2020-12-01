var kidsWithCandies = function(candies, extraCandies) {
  let maxcandy = -Number.MAX_VALUE;
  for(var x=0; x < candies.length; x++){
   if(maxcandy < candies[x]){
     maxcandy = candies[x];
   } 
  }
  console.log(maxcandy)
    for(var i=0; i < candies.length; i++){
      if(candies[i] + extraCandies >= maxcandy){
        candies[i]= true;
      } else {
        candies[i]= false;
      }
    }
    return candies;
};
console.log(kidsWithCandies([2,3,5,1,3], 3))