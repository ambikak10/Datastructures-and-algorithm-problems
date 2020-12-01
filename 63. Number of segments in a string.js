//Time : o(2*ans)?
// space: o(ans)
  var countSegment = function (s) {
  let arr = s.split(' ');
  console.log(arr)
  let ans = 0;
  //if (arr[2]) console.log('truthy');
  arr.forEach(function (item) {
    console.log("hi")
    item && ans++;
  })
  return ans;
};
console.log(countSegment("Hello,my name is John hello"));


// var countSegments = function (s) {
//   s = "a " + s + " a";
//   console.log(s);
//   s = s.replace(/\s+/g, ' ')
//   console.log(s.split(" "));
//   return s.replace(/\s+/g, ' ').split(" ").length - 2;
// }
// console.log(countSegments("Hello, my name is John"));

x=NaN
if(x==true){
console.log("ji")
} else {
  console.log("bam")
}

console.log(1 && 0)