
var subsets = function(a, subset, index){
  console.log(subset.join());
  for(var i = index; i<a.length; i++){
    subset.push(a[i]);
    subsets(a, subset, i+1)
    subset.pop();
  }
  return;
}
// subsets(['a', 'b', 'c'], [], 0);

// o(2^n)