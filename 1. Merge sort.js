// o(nlogn)
var mergeSort = function(arr){
  if(arr.length > 1){
    mid= Math.floor(arr.length/2);
    var L = arr.slice(0, mid);
    var R = arr.slice(mid);
    // console.log(mid);
    mergeSort(L);
    mergeSort(R);
    var i=j=k= 0;
    while(i< L.length && j < R.length) {
      if(L[i] < R[j]){
        arr[k] = L[i];
        i++;
      } else {
        arr[k] = R[j];
        j++;
      }
      k++;
    }
     while( i < L.length){
       arr[k] = L[i];
       i++;
       k++;
     }
     while( j < R.length){
       arr[k] = R[j];
       j++;
       k++;
     }
  }
 return arr;
}
console.log(mergeSort([38, 27, 43, 3, 9, 82, 10]));