//Reverse linked list using recursion
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
  reversedList(head){
    var stack = [];
    if (head === null || head.next === null) {
      return head;
    }
    // console.log(this.head);
    // head = head.next;
    // console.log(this.head);
    var p = this.reversedList(head.next);
    head.next.next = head;
    head.next =  null;
    this.tail =  head;
    this.head = p;
    return this.head;
  }
   
}

var list = new LinkedList();
list.pushNode(2);
list.pushNode(4);
list.pushNode(6);
list.pushNode(8);
// console.log(list);
console.log(list.reversedList(list.head));
console.log(list);


