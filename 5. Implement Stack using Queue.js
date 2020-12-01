class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(element) {
    this.items.push(element);
  }
  isEmpty() {
    // return true if the queue is empty.
    return this.items.length == 0;
  }
  dequeue() {
    if (this.isEmpty()) return "Underflow";
    return this.items.shift();
  }
  front() {
    if (this.isEmpty()) return "No elements in Queue";
    return this.items[0];
  }
}
class stackUsingQueue {
  constructor() {
    this.q1 = new Queue();
    this.q2 = new Queue();
    //var curr_size = 0;
  }
  push(x) {
    //this.curr_size += 1;
    this.q2.enqueue(x);
    console.log(x);
    while (!this.q1.isEmpty()) {
      this.q2.enqueue(this.q1.dequeue());
    }
    var q = this.q1;
    this.q1 = this.q2;
    this.q2 = q;
  }
  pop() {
    if (this.q1.isEmpty()) {
      return;
    }
    console.log(this.q1.dequeue());
    // return this.q1.dequeue();
    // curr_size--;
  }
}

var s = new stackUsingQueue();
s.push(1);
s.push(2);
s.push(3);
s.push(4);
s.pop();
s.pop();
s.pop();
s.push(5);
s.pop();
