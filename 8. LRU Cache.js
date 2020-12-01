
// o(1)
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.size = 0;
  this.head = new DoubleLinkedNode(0, null, null);
  this.tail = new DoubleLinkedNode(0, this.head, null);
  this.head.right = this.tail;
  this.dict = {};
};
function DoubleLinkedNode(val, left, right) {
  this.left = left;
  this.right = right;
  this.val = val;
}
LRUCache.prototype.get = function (key) {
  const node = this.dict[key];
  if (node !== undefined) {
    this.put(key, node.val[1]);
    return node.val[1];
  } else {
    return -1;
  }
};


LRUCache.prototype.put = function (key, value) {
  const node = this.dict[key];
  if (node) {
    this.remove(node);
  } else {
    if (this.size >= this.capacity) {
      this.removeLast();
    }
  }

  const newNode = new DoubleLinkedNode(
    [key, value],
    this.head,
    this.head.right
  );
  this.head.right.left = newNode;
  this.head.right = newNode;
  this.dict[key] = newNode;

  this.size++;

  return value;
};

LRUCache.prototype.removeLast = function () {
  this.size--;

  delete this.dict[this.tail.left.val[0]];

  this.tail.left.left.right = this.tail;
  this.tail.left = this.tail.left.left;
};

LRUCache.prototype.remove = function (node) {
  this.size--;

  node.left.right = node.right;
  node.right.left = node.left;

  delete this.dict[node.val[0]];
};

// var cache = new LRUCache(3);
// cache.put(1, 1);
// cache.put(2, 2);
// console.log(cache.get(1));       // returns 1
// cache.put(3, 3);    // evicts key 2
// console.log(cache.get(2));       // returns -1 (not found)
// cache.put(4, 4);    // evicts key 1
// console.log(cache.get(1));       // returns -1 (not found)
// cache.get(3);       // returns 3
// console.log(cache.get(4));       // returns 4
