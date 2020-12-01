console.log(findDuplicate([0, 1, 1, 2, 2]));

function findDuplicate(nums){ 
  var a = {};
  for (var i = 0; i < nums.length; i++) {
    if (!a[nums[i]]) {
      a[nums[i]] = true;
    } else return nums[i];
  }
};
// console.log(findDuplicate([0,1,1,2,2]))


// console.log(myName);
// const myName = 'Sunil';

// console.log("2a", myName2); // error: myName2 is not defined
if (1) {
  console.log("2b", myName2); // undefined
  let myName2 = "Sunil";
}