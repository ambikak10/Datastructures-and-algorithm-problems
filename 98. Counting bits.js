// var countBits = function (num) {
//   var a = [];
//   var count;
//   a.push(0);
  
//   for (let j = 1; j <= num; j++) {
//     count = 0;
//     var i = j; //otherwise i will always be starting from 0 again
//     while (i !== 0) {
//        console.log(i);
//       if (i % 2 === 1) {
//        count++;
//       }
//       i = ~~(i / 2);
//     }
//     a.push(count);
//   }
//   return a;
// };
// console.log(countBits(2));

// console.log(4 >> 1); // right shift halves the number, decreases the number
// console.log(5 << 1); // doubles the number
// console.log(~~(1 / 2));
 console.log(1 >> 1)
 console.log(2 & 1)

var countBits = function(num) {
    const A = new Array(num + 1).fill(0);
    console.log(A)
    for (let i = 1; i <= num; ++i)
        A[i] = A[i >> 1] + (i & 1); //previous + 
    return A;
};
console.log(countBits(2));


/*  
 4

 0      1         2        3         4 

 00     01        10       11        100

  0     1          1        2        1  //No of 1s

  0     1 >> 1

  0     half it, 
        check in array for that halved value how many 1s, 
        + check if last digit is 1,   ex: 1001 (8)>> 1 will give only 100 i.e., 4, so 100 ge estu 1? + last 1
  */