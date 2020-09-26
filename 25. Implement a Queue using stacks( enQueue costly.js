// Method 1 (By making enQueue operation costly)
// o(n) for enQueue, o(1) for deQueue, Auxiliary Space: O(N).
var s1 = [];
var s2 = [];
var enQueue = function (x) {
  //Move all elements from s1 to s2
  while (s1.length !== 0) {
    s2.push(s1.pop());
  }
  // Push item into s1
  s1.push(x);

  //Move all elements from s2 to s1
  while (s2.length !== 0) {
    s1.push(s2.pop());
  }
};
var deQueue = function () {
  if (s1.length === 0) {
    console.log("S1 is empty");
  }
  return s1.pop();
};
enQueue(1);
enQueue(2);
enQueue(4);

//console.log(deQueue());
enQueue(3);
// console.log(deQueue());
// console.log(deQueue());

// Method 3 (By using recursion)
