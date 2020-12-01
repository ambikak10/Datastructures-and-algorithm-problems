// Method 2 (By making deQueue operation costly)
// o(1) for enQueue, o(n) for deQueue, Auxiliary Space: O(N).
class Queue {
  constructor() {
    this.s1 = [];
    this.s2 = [];
  }
  enQueue(x) {
    this.s1.push(x);
    console.log("Enqueued element is : " + x);
  }
  deQueue() {
    if (this.s1.length === 0 && this.s2.length === 0) {
      console.log("S1 and S2 empty");
      return;
    }
    if (this.s2.length === 0) {
      while (this.s1.length !== 0) {
        this.s2.push(this.s1.pop());
      }
    }
    if (this.s2.length !== 0) {
      //  console.log("s2 is empty");
      // } else {
      console.log("Dequeued element is : " + this.s2.pop());
    }
  }
}
// var q = new Queue();
// q.enQueue(1)
// q.enQueue(2)
// q.enQueue(3)
// q.deQueue();
// q.enQueue(4);
// q.deQueue();
