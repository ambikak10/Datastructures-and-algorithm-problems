// O(n)

var windowSliding = function (a, k) {
  var window = {};
  var count = 0;
  var arr = [];
  var i;
  for (i = 0; i < k; i++) {
    if (a[i] in window) {
      window[a[i]]++;
    } else {
      window[a[i]] = 1;
      count++;
      //console.log(count);
    }
  }
  arr.push(count);
  //console.log(arr);
  console.log(window);

  for (i = k; i < a.length; i++) {
    if (window[a[i - k]] === 1) {
      delete window[a[i - k]];
      count--;
      //  console.log(window[a[i-k]]);
    } else {
      window[a[i - k]]--;
    }
    if (a[i] in window) {
      window[a[i]]++;
    } else {
      window[a[i]] = 1;
      count++;
    }
    arr.push(count);
  }
  console.log(window);
  console.log(arr);
};

windowSliding([1, 2, 1, 4, 4, 4, 3], 3);


// var windowSliding =  function(a){
// var arr = [];
// for(var i=0; i<a.length-2;i++){
//  var count=1;
//  if(a[i] !== a[i+1])
//  count += 1;
 
//  if(a[i+1] !== a[i+2]  && a[i] !== a[i+2]){
//   count++;
//  }
//  arr.push(count);
//  }
//  return arr;
// }
// // console.log(windowSliding([4, 1, 2, 1, 2, 3, 10]));


// var sliding = function(a){

// }