var twoSum = function (nums, target) {
  var a = [];
  for (var i = 0; i < nums.length; i++) {
    temp = target - nums[i];
    if(a[temp] !== undefined) return [a[temp], i]
    a[nums[i]] = i;
  }
}
console.log(twoSum([5, 2, 3, 4, 3, 6, 1, 9, 2, 1], 11))
// O(n) space and time
//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

//Find all pairs 

// let arr = [1,5,6,1,0,1];
// const findSumPairs = (arr, value) => {
//   let sumsLookup = {};
//   let output = [];
  
//   for(let i = 0; i < arr.length; i++) {
//     let targetVal = value - arr[i];
    
//     if(sumsLookup[targetVal]) {
//       output.push([arr[i], targetVal]);
//     }  
    
//     sumsLookup[arr[i]] = true;
//   }
  
//   return output;
// }
// console.log(findSumPairs(arr, 6));

let Info = {
 name: 'Niki',
 Roll: '17BTCSE22',
 Section: 'A',
 
 dispInfo: function(){
 console.log('Hey There! These are details about me!');
 }
 }
 
 Info.dispInfo()

  const num1 = 4;
 const num2 = [];
 for (var i = 0; i < num1; i++);{
 num2.push(i + 1);
 }
 
 num2;

  const myPromise = Promise.resolve('Javascript is Awesome');
 
 (async () => {
 try {
 console.log(await myPromise);
 } catch {
 throw new Error(`Oops didn't work`);
 } finally {
 console.log('Oh finally!');
 }
 })()

  function lane(x, y) {
 console.log("Which is the " + x + " side");
 return y;
 }
 
 console.log(lane("left", 6) / lane("middle", 2) / lane("right", 3));

