var bubbleSort = function(arr){
  for(let i = 0; i+1 < arr.length; i++){
    if(arr[i] > arr[i+1]){
      let tmp = arr[i];
      arr[i] = arr[i+1];
      arr[i+1] =  tmp;
    }
  }
  return arr;
}
console.log(bubbleSort([3, 2, 5, 4]))