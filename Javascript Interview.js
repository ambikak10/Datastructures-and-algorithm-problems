  var bar = function(){
    console.log('bar')
  }
  console.log(typeof(bar))


  // var money = 200;
// if (typeof money !== 'number') {
//     callback(null, new Error('money is not a number'))
//   } else {
//     callback(money)
//   }


// function test() {
//    var a;
//    function foo() {
//       return 2;
//    }

//    console.log(a);
//    console.log(foo());
   
//    a = 1;
// }

// test();

async function firstAsync() {
    let promise = new Promise((res, rej) => {
        setTimeout(() => res("Now it's done!"), 1000)
    });

    // wait until the promise returns us a value
    let result = await promise; 
  
    // "Now it's done!"
    // alert(result); 
    }
firstAsync();
 



let oobj = {
    a: 1,
    b: 2,
    c: {
        age: 30
    }
};

var objclone = Object.assign({},oobj);
console.log(objclone)

oobj.c.age = 45;
console.log('After Change - obj: ', oobj);           // 45 - This also changes
console.log('After Change - objclone: ', objclone); // 45


// var objclone = Object.assign({},oobj);
// console.log('objclone: ', objclone);

// let i = 1;

// const test = () => {
//   console.log(i)
// };

// test();


const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log('Index: ' + i + ', element: ' + arr[i]);
  }, 3000);
}


class person{ 
    constructor(name){ 
        this.name = name; 
    } 
    //method to return the string 
    toString(){ 
        return (`Name of person: ${this.name}`); 
    } 
} 
class student extends person{ 
    constructor(name,id){ 
        //super keyword to for calling above class constructor 
        super(name); 
        this.id = id; 
    } 
    toString(){ 
        return (`${super.toString()},Student ID: ${this.id}`); 
    } 
} 
let student1 = new student('Mukul',22); 
console.log(student1.toString()); 