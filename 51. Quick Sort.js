// o(nlogn)
var partition = function(arr, low, high){
  var i = (low - 1);       
  var pivot = arr[high]; 
  var temp;   


for(j=low; j<=high-1; j++){ //if items in arr is less than pivot, swap them in the beginning positions pointed by i
    if(arr[j] < pivot){
        i = i + 1;
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
     }
    }
    //position the pivot, swap i+1 th element with pivot element
    temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;    
   
  // console.log(i + 1);
  return (i + 1); // returns the pivot's index
}
var quickSort = function(arr, low, high){
  if (low < high){ 
      //i = i + 1
      //console.log('partition', arr, low, high)
    var pi = partition(arr, low, high) 
      //console.log('quicksort ->',i, arr, low, pi - 1)
    quickSort(arr, low, pi - 1)
      //console.log('quicksort ->',i, arr, pi + 1, high)
    quickSort(arr, pi + 1, high)
  }
  return arr;
}
var arr = [10, 7, 8, 2, 1, 5]
var n = arr.length;
i = 0
console.log(quickSort(arr, 0, n-1));