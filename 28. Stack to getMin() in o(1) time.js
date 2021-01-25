// O(1) Time complexity O(1) space complexity
// With class defined
class Stack {
  constructor() {
    this.item = [];
    this.min = Number.MAX_VALUE;
    // this.getMin = this.getMin.bind(this);
  }

  push =(x)=> {
    if (this.item.length === 0) {
      this.item.push(x);
      this.min = x;
      console.log("Number inserted", x);
      return;
    } else if (x < this.min) {
      var temp = 2 * x - this.min;
      this.item.push(temp);
      this.min = x;
    } else {
      this.item.push(x);
    }
    console.log("Number inserted", x);
  }

  pop() {
    console.log(this.getMin)
    if (this.item.length === 0) {
      console.log("Stack is empty");
    }
    var z = this.item.pop();
    if (z < this.min) {
      console.log("popped item is: " + this.min);
      this.min = 2 * this.min - z;
    } else {
      console.log("popped item is: " + z);
    }
  }
  getMin() {
    
    if (this.item.length === 0) {
      console.log("stack is empty");
    } else {
      console.log("Min element in the stack is: " + this.min);
    }
  }
}
var stack = new Stack();

stack.push(3);
stack.push(4);
stack.push(2);
stack.push(6);
stack.getMin();
stack.pop();
stack.pop();
// stack.push(1);
stack.getMin();

//Without class
// var stack = [];
// var min;
// function Push(x){
//   if(stack.length === 0){
//        stack.push(x);
//        min = x;
//        console.log("Number inserted", x);
//        return;
//   } else if( x < min){
//        var temp = 2*x - min;
//        stack.push(temp);
//        min =  x;
//   } else {
//        stack.push(x);
//   }
//   console.log("Number inserted", x)
// }

// function Pop(){
//   if(stack.length === 0){
//     console.log("Stack is empty");
//   }
//   var z = stack.pop();
//   if(z < min){
//     console.log(min);
//     min = 2*min-z;
//   } else {
//     console.log(z);
//   }
// }
// function getMin(){
//   if(stack.length === 0){
//     console.log("Stack is empty");
//   } else {
//     console.log("Min element in the stack is: "+ min);
//   }
// }

// Push(3);
// Push(4);
// Push(6);
// getMin();
// Push(2);
// Pop();
// getMin();
// Push(1);
// getMin();
