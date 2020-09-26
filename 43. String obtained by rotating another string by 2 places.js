var rotateString =  function(A, B){
 if(A.length !== B.length)
  return false;

// anticlockwise
 var x = B.substring(B.length - 2, B.length) + B.substring(0, B.length - 2);
 console.log(x);
 if(A === x){
   return true;
 } 
//clockwise
 var x = B.substring(2, B.length) + B.substring(0, 2);
 if(A === x)
  return true;
return false;
}
rotateString("amazon", "azonam");
