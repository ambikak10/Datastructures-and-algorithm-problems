// var d = {};
// ["zebra", "horse"].forEach(function (k) {
//   d[k] = undefined;
// });
// console.log(d)



for (var i = 1; i < 10; i++) {
  setTimeout(function () {
    console.log(i);
  });
}

// var arr1 = "john".split("");
// var arr2 = arr1.reverse();
// console.log(arr2)
// console.log(arr1)
// var arr3 = "jones".split("");
// console.log(arr3)
// console.log(arr2.push(arr3))
// console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
// console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));

// var a = [1,2];
// var b = [3];
// console.log(a.push(b))

// for (var i = 0; i < 5; i++) {
// 	setTimeout(function() { console.log(i, i*1000); }, i * 1000 );
// }

// for (var i = 0; i < 5; i++) {
//     (function(x) {
//         setTimeout(function() { console.log(x); }, x * 1000 );
//     })(i);
// }

// for (let i = 0; i < 5; i++) {
// 	setTimeout(function() { console.log(i); }, i * 1000 );
// }

// var a={},
//     b={key:'b'},
//     c={key:'c'};

// a[b]=123;
// console.log(a)
// a[c]=456;
// console.log(a[b]);
/* The output of this code will be 456 (not 123).
The reason for this is as follows: When setting an object property, JavaScript will implicitly stringify the parameter value. In this case, since b and c are both objects, they will both be converted to "[object Object]". As a result, a[b] anda[c] are both equivalent to a["[object Object]"] and can be used interchangeably. Therefore, setting or referencing a[c] is precisely the same as setting or referencing a[b].*/


// console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));


// var hero = {
//     _name: 'John Doe',
//     getSecretIdentity: function (){
//         return this._name;
//     }
// };

// var stoleSecretIdentity = hero.getSecretIdentity;

// console.log(stoleSecretIdentity());
// console.log(hero.getSecretIdentity());
/*The first console.log prints undefined because we are extracting the method from the hero object, so stoleSecretIdentity() is being invoked in the global context (i.e., the window object) where the _name property does not exist.

One way to fix the stoleSecretIdentity() function is as follows:

var stoleSecretIdentity = hero.getSecretIdentity.bind(hero)*/


var length = 10;
function fn() {
	console.log(this.length);
}

var obj = {
  length: 5,
  method: function(fn) {
    fn();
    arguments[0]();
  }
};

obj.method(fn, 1);


var a = [1, 2, 3];
a[10] = 99;
console.log(a[6]);


var b = [undefined];
b[2] = 1;
console.log(b);             // (3) [undefined, empty × 1, 1]
console.log(b.map(e => 7)); // (3) [7,         empty × 1, 7]

console.log(typeof(undefined)) 
console.log(typeof(null))

console.log(typeof typeof 1);

var b = 1;
function outer(){
   	var b = 2
    function inner(){
      console.log(b)
        b++;
        console.log(b)
        var b = 6;
        console.log(b)
    }
    inner();
}
outer();
//Furthermore, due to hoisting the code in inner will be interpreted as follows:
function inner () {
    var b; // b is undefined
    b++; // b is NaN
    b = 3; // b is 3
    console.log(b); // output "3"
}


let oobj = {
    a: 1,
    b: 2,
    c: {
        age: 30
    }
};

var objclone = Object.assign({},oobj);
console.log('objclone: ', objclone)

oobj.c.age = 45;
console.log('After Change - obj: ', oobj);           // 45 - This also changes
console.log('After Change - objclone: ', objclone); // 45
var objclone = Object.assign({},oobj);
console.log('objclone: ', objclone);

(function () {
    try {
        throw new Error();
    } catch (z) {
        var x = 1, y = 2;
        console.log(x);
    }
    console.log(x);
    console.log(y);
})();


// firstRequest()
//   .then(function(response) {
//     return secondRequest(response);
// }).then(function(nextResponse) {  
//     return thirdRequest(nextResponse);
// }).then(function(finalResponse) {  
//     console.log('Final response: ' + finalResponse);
// }).catch(failureCallback);


// const myPromise = new Promise((resolve, reject) => {  
//     let condition;  
    
//     if(condition is met) {    
//         resolve('Promise is resolved successfully.');  
//     } else {    
//         reject('Promise is rejected');  
//     }
// });
// myPromise.then((message) => { 
//     console.log(message);
// }).catch((message) => { 
//     console.log(message);
// });


const wait = time => new Promise((resolve) => setTimeout(resolve({ name : "Ambika"}), time));

wait(3000).then((msg) => console.log(msg)); // 'Hello!'

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("got the user");
    resolve ({ name : "Ambika"});
    reject(new Error("User not logged in"));
 }, 2000);
});
promise.then(user => {
  console.log(user);
})
.catch(err => console.log(err.message));



function getMoneyBack(money, callback) {
  if (typeof money !== 'number') {
    callback(null, new Error('money is not a number'))
  } else {
    callback(money)
  }
}

const money = getMoneyBack(1200)
console.log(money)



function getMoneyBack(money) {
  return new Promise((resolve, reject) => {
    if (typeof money !== 'number') {
      reject(new Error('money is not a number'))
    } else {
      resolve(money)
    }
  })
}

getMoneyBack(1200).then((money) => {
  console.log(money)
})


function hey() {
console.log('hey ' + myName);
};
var myName;
hey();
myName = 'sunil'



// alert(foo()); // Alerts 5. Declarations are loaded before any code can run.
// function foo() { return 5; }


// var money = 200;
// if (typeof money !== 'number') {
//     callback(null, new Error('money is not a number'))
//   } else {
//     callback(money)
//   }


  var bar = function(){
    console.log('bar')
  }
  console.log(typeof(bar))


