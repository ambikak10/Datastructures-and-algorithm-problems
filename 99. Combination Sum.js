var combinationSum = function (candidates, target, index=0, cur=[], combinations=[]) {

  if(target <= 0) {
    if(target === 0) combinations.push(cur.slice());
    return;
  }

  if(index < candidates.length) {
    const value = candidates[index];
    cur.push(value);
    combinationSum(candidates, target-value, index, cur, combinations)
    cur.pop();
    combinationSum(candidates, target, index+1, cur, combinations);
  }
    return combinations;
}
  // var a = [];

  // for (var i = 0; i < candidates.length; i++) {
  //   var b = [];
  //   if (target % candidates[i] === 0) {
  //     let j = target / candidates[i];
  //     while (j !== 0) {
  //       b.push(candidates[i]);
  //       j--;
  //     }
  //     a.push(b);
  //     console.log(a);
  //   }

  //   for (var k = i; k < candidates.length; k++) {
  //     var sum = 0;
  //     while (sum < target) {
  //       sum = sum + candidates[k];
  //     }
  //   }
  // }

console.log(combinationSum([2, 3, 5], 8));

//Input: candidates = [2,3,5], target = 8
//Output: [[2,2,2,2],[2,3,3],[3,5]]
