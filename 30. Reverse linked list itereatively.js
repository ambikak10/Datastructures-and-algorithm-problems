//o(n)
//SINGLY LINKED
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// LinkedList constructor
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // Add a node to the end of the linked list
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      // newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return newNode;
  }
  // Reverse a linked list
  reversedList() {
    if (this.head === null || this.head.next === null) {
      console.log("Hello")
      return this.head;
    }
    var prev = null;
    this.tail = this.head;
    while (this.head !== null) {
      var current = this.head;
      this.head = current.next;
      current.next = prev;
      prev = current;
    }
    this.head = prev;
    //console.log(this)
    return this;
  }
}

var list = new LinkedList();
//list.push(null);
list.push(4);
list.push(6);
list.push(8);
//console.log(list);
console.log(list.reversedList());
