// o(1)
//DOUBLY LINKED
class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return newNode;
  }

  pop(node) {
    //in case of empty list
    if (this.length === 0) {
      return false;
    }

    if (node === this.head) {
      const newHead = this.head.next;
      this.head.next = null;
      this.head = newHead;
    } else if (node === this.tail) {
      const newTail = this.tail.prev;
      newTail.next = null;
      this.tail.prev = null;
      this.tail = newTail;
    } else {
      let removedNode = node;
      const after = removedNode.next;
      const before = removedNode.prev;
      removedNode.next = null;
      removedNode.prev = null;
      before.next = after;
      after.prev = before;
    }
    this.length--;

    return node;
  }

  find_first_nonrepeating_char(s) {
    var inDLL = {};
    var repeated = {};
    for (var i = 0; i < 26; i++) {
      var chr = String.fromCharCode(97 + i);
      inDLL[chr] = null;
      repeated[chr] = false;
    }
    for (var i = 0; i <= s.length - 1; i++) {
      var x = s[i];
      if (!repeated[x]) {
        if (inDLL[x] === null) {
          var node = this.push(x);
          inDLL[x] = node;
        } else {
          this.pop(inDLL[x]);
          inDLL[x] = null;
          repeated[x] = true;
        }
      }
     }
    if (this.head !== null) {
      console.log(this.head.value);
    } else {
      console.log(-1);
    }
  }
}

dll = new DoublyLinkedList();
dll.find_first_nonrepeating_char("aa");
// console.log(dll)
