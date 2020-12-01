// o(2n)
//Reverse linked list using stack
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.lengths = 0;
  }
 // Add a node to the end of the linked list
  pushNode(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.lengths++;
    return newNode;
  }

  popNode() {
    //in case of empty list
    if (this.lengths === 0) {
      return false;
    } else {
      const newHead = this.head.next;
      this.head.next = null;
      var popped = this.head;
      this.head = newHead;
      this.lengths--;
      // console.log(popped.value);
      return popped.value;
    }
  }
  reversedList(){
    var stack = [];
    if (this.head === null || this.head.next === null) {
      return this.head;
    }
  //   // console.log(this.lengths);
  //   while(this.lengths !== 0){
  //    stack.push(this.popNode());
  //     // console.log(this.lengths);
  //   }
  //   //console.log(stack);
  //   while(stack.length !== 0){
  //     this.pushNode(stack.pop());
  //   }
  //   // console.log(this);
  //    return this;
  // }
    while(this.head !== null){
    stack.push(this.head);
    this.head = this.head.next;
     }
    this.tail = null;
    while(stack.length !== 0){
      var n = stack.pop();
      if(this.head ===  null){
        this.head = n;
        this.tail = n;
      }else{
        this.tail.next = n;
        this.tail = n;
      }
     }
     return this.head;
  }
}

var list = new LinkedList();
list.pushNode(2);
list.pushNode(4);
list.pushNode(6);
list.pushNode(8);
// console.log(list);
console.log(list.reversedList());
