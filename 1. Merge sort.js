// o(nlogn)
var mergeSort = function(arr){
  if(arr.length > 1){
    mid= Math.floor(arr.length/2);
    var L = arr.slice(0, mid);
    var R = arr.slice(mid);
    // console.log(mid);
    mergeSort(L);
    mergeSort(R);
    var i=j=k= 0;
    while(i< L.length && j < R.length) {
      if(L[i] < R[j]){
        arr[k] = L[i];
        i++;
      } else {
        arr[k] = R[j];
        j++;
      }
      k++;
    }
     while( i < L.length){
       arr[k] = L[i];
       i++;
       k++;
     }
     while( j < R.length){
       arr[k] = R[j];
       j++;
       k++;
     }
  }
 return arr;
}

console.log(mergeSort([38, 27, 43, 3, 9, 82, 10]));

console.log(Number.isNaN());


console.log(1 + "2" + "2");
console.log(1 + +"2" + "2");
console.log(1 + -"1" + "2");
console.log(+"1" + "1" + "2");
console.log("A" - "B" + "2");
console.log("A" - "B" + 2);


class Foo {}
console.log(typeof Foo)

let wrongMap = new Map();
wrongMap["bla"] = "blaa";
wrongMap["bla2"] = "blaaa2";
console.log(wrongMap); 

// function identify() {
 
// 	return this.name.toUpperCase();
// }

// function speak() {
//    console.log(this);
// 	var greeting = "Hello, I'm " + identify.call( this );
// 	console.log( greeting );
// }

// var me = {
// 	name: "Kyle"
// };

// var you = {
// 	name: "Reader"
// };

// identify.call( me ); // KYLE
// identify.call( you ); // READER

// speak.call( me ); // Hello, I'm KYLE
// speak.call( you ); // Hello, I'm READER



// function foo(num) {
//   console.log(this)
// 	console.log( "foo: " + num );

// 	// keep track of how many times `foo` is called
// 	this.count++;
// }

// foo.count = 0;

// var i;

// for (i=0; i<10; i++) {
// 	if (i > 5) {
// 		foo( i );
// 	}
// }
// // foo: 6
// // foo: 7
// // foo: 8
// // foo: 9

// // how many times was `foo` called?
// console.log( foo.count ); // 0 -- WTF?


// let boom  = {
//   count: 11,
//   hi : function(){
//     console.log(this);
//     return this.count;
//   },
//   hello: function(){
//      return function(){
//        console.log(this);
//      }
//   }
// }

// let fun = boom.hi;
// console.log(fun());
// console.log(boom.hi())
// console.log(boom.hello())

(function () {
  console.log(1);
 
  setTimeout(function () {
    console.log(3);
  }, 0);
   setTimeout(function () {
     console.log(2);
   }, 1000);
  console.log(4);
})();