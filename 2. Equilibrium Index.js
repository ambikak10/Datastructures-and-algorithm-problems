var equilibriumIndex = function (nums) {
  sum = 0;
  leftsum = 0;
  for (var i = 0; i <= nums.length - 1; ++i) {
    //  console.log(i, sum);
    sum = sum + nums[i];
    //  console.log(i);
  }
  for (i = 0; i <= nums.length - 1; ++i) {
    //  console.log(i, sum, leftsum);
    sum = sum - nums[i];
    if (sum === leftsum) return i;
    leftsum += nums[i];
  }
  /* If no equilibrium index found, then return 0 */
  return -1;
};
console.log(equilibriumIndex([ -7, 1, 5, 2, -4, 3, 0]));
//O(2n)

i = 10;
console.log(i++);
console.log(i);
console.log(++i)


// var pokemon = {
//     firstname: 'Pika',
//     lastname: 'Chu ',
//     getPokeName: function() {
//         var fullname = this.firstname + ' ' + this.lastname;
//         return fullname;
//     }
// };

// var pokemonName = function() {
//     console.log(this.getPokeName() + 'I choose you!');
// };
// pokemonName();
// var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now

// logPokemon(); // 'Pika Chu I choose you!'



var pokemon = {
    firstname: 'Pika',
    lastname: 'Chu ',
    getPokeName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var pokemonName = function(snack, hobby) {
    console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
};

pokemonName.call(pokemon,'sushi', 'algorithms'); // Pika Chu  loves sushi and algorithms
pokemonName.apply(pokemon,['sushi', 'algorithms']); // Pika Chu  loves sushi and algorithms

console.log(typeof(NaN))
console.log(NaN === NaN)
console.log(Number.isInteger(NaN))


const wait = time => new Promise((resolve) => setTimeout(resolve, time));

wait(3000).then(() => console.log('Hello!')); // 'Hello!'


var myObject = {
  foo: "bar",
  func: function () {
    var self = this;
    console.log("outer func:  this.foo = " + this.foo);
    console.log("outer func:  self.foo = " + self.foo);
    (function () {
      console.log("inner func:  this.foo = " + this.foo);
      console.log("inner func:  self.foo = " + self.foo);
    })();
  },
};
myObject.func();

console.log(Number.isInteger(NaN));


setTimeout(function() {
console.log(2)
}, 3000)
for(var i = 1; i < 10000; i++) {
  // takes 10 seconds
  console.log(i)
}







