// o(nlogn)
var partition = function(arr, low, high){
  var i = (low - 1);       
  var pivot = arr[high]; 
  var temp;   

for(j=low; j<=high-1; j++){ 
    if(arr[j] < pivot){
        i = i + 1;
        console.log(arr[j]);
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
     }
    }
    console.log(arr);
    temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;    
   
  // console.log(i + 1);
  return (i + 1);
}
var quickSort = function(arr, low, high){
  if (low < high){ 
  var pi = partition(arr, low, high) 
  quickSort(arr, low, pi - 1)
  quickSort(arr, pi + 1, high)
  }
  return arr;
}
var arr = [10, 7, 8, 2, 1, 5]
var n = arr.length;
console.log(quickSort(arr, 0, n-1));