var s = [];
var enQueue = function (x) {
  s.push(x);
};
var deQueue = function () {
  if (s.length === 0) {
    console.log("Empty Queue");
    return;
  }
  var z = s.pop();
  if (s.length === 0) {
    return z;
  }
  var item = deQueue();
  s.push(z);
  return item;
};
enQueue(1);
enQueue(2);
enQueue(3);
//  console.log(deQueue())
//  enQueue(4);
//  console.log(deQueue())
//  console.log(deQueue())
//  console.log(deQueue())
