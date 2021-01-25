var permutation = function (a, b) {
  a = a.split('').sort().join();
    console.log(a)
  b = b.split('').sort().join();
    console.log(b);

  if (a === b) {
    return true;
  } else {
    return false;
  }
};
 console.log(permutation('act', 'cat'))

// 2 * O(Nlogn) or something

const object1 = {
  a: 'somestring',
  b: 42
};

console.log(Object.entries(object1)) 

a= 'how are'
console.log(a.split())

