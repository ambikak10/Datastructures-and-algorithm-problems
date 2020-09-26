var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.obj = {};
  this.arr = [];
};

/**
 * @param {number} key
 * @returns {number}
 */
LRUCache.prototype.get = function (key) {
  var val = this.obj[key];
  if (val > 0) {
    var index = this.arr.indexOf(key);
    this.arr.splice(index, 1);
    this.arr.unshift(key);
    return val;
  } else return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @returns {void}
 */
LRUCache.prototype.set = function (key, value) {
  if (this.obj[key]) {
    this.obj[key] = value;
    var index = this.arr.indexOf(key);
    this.arr.splice(index, 1);
    this.arr.unshift(key);
    return;
  }

  if (this.capacity === this.arr.length) {
    var k = this.arr.pop();
    this.obj[k] = undefined;
  }

  this.obj[key] = value;
  this.arr.unshift(key);
};
// var cache = new LRUCache(2);
// cache.set(1, 1);
// cache.set(2, 2);
// console.log(cache.get(1));       // returns 1
// cache.set(3, 3);    // evicts key 2
// console.log(cache.get(2));
// cache.set(4, 4);     // returns -1 (not found cache.set(4, 4);    // evicts key 1
// console.log(cache.get(1));       // returns -1 (not found)
// console.log(cache.get(3));       // returns 3
// console.log(cache.get(4));       // returns 4
