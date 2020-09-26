//Palindrome/Reverse number
var reverse = function (x) {
  var min = -(1 << 30) * 2;
  var max = (1 << 30) * 2 - 1;

  var rev;
  var arr = x.toString(2).split('');
  console.log(typeof (x));
  if (x < 0)
    arr.shift();
  rev = Number(arr.reverse().join(''));
  if (x < 0)
    rev = rev * -1;
  if (rev === x) {
    console.log("It's a palindrome");
  }
  else {
    console.log("No");
  }
  if (rev < min || rev > max)
    return 0;
  else
    return rev;

}
console.log(reverse('1100'));


//String palindrome simple
var reverse = function (x) {
  return x == x.split('').reverse().join('');
}
console.log(reverse("racecar"));
console.log(reverse("race"));



//Number palindrome simple
var palindrome = function (x) {
  return x.toString().split('').reverse().join('');
}
console.log(palindrome(456));


//Number palindrome using mod for decimals like 2.3
var reverse = function (x) {
  x.toString(); //indexOf works only for string.
  var reversed = 0;
  var exponent = x.indexOf('.');//get index of decimal point
  if (exponent !== -1) { //if '.' is there, come inside loop
    x = x * Math.pow(10, x.length - exponent - 1); // Remove decimal point. 1.32 = 1.32 x 100. 100 got by 10^4-1-1 
  }//how many digits after decimal point? in 1.32, it is 2. So 10 to the power of 2. or total length i.e.,4-2.
  //since array index starts from 0,and get 1 one less number, we subtract 10^4-exponent-1
  console.log(x)
  while (x != 0) {
    reversed = reversed * 10;
    reversed = reversed + x % 10;
    x = x - x % 10;
    x = x / 10;
    //console.log(reversed)
  }

  if (exponent !== -1) {
    reversed = reversed / Math.pow(10, exponent)  // 10^ How many digits before decimal point, in 1.32, it is 1 digit. 
    //so, on reverse, 231/10^1=23.1
  }
  // return reversed;
  if (x == reversed) {
    return true;
  }
  else return false;
}
console.log(reverse(''));





//Usual way to find palindrome string or number using pop and push
var letters = [];
var word = "racecar"
var rword = "";
for (var i = 0; i < word.length; i++) {
  letters.push(word[i]);
}
for (var i = 0; i < word.length; i++) {
  rword += letters.pop();
}
if (rword === word) {
  console.log("true")
} else {
  console.log("false")
}

//Palindrome by reverting only the last half and comparing with first half for odd and even
//eg: 12321 or 121
//C#
// var isPlaindrome =  function(x){
//  if(x < 0 || (x % 10 == 0 && x != 0)) {
//             return false;
//         }

//         int revertedNumber = 0;
//         while(x > revertedNumber) {
//             revertedNumber = revertedNumber * 10 + x % 10;
//             x /= 10;
//         }
// return x == revertedNumber || x == revertedNumber/10; // for odd numbers, 12321
// }
//Palindrome using for loop string or number
//
var isPalindrome = function (string) {

  // string = string.toLocaleLowerCase();

  for (let i = 0; i < Math.floor(string.length / 2); i++) {
    if (string[i] !== string[string.length - i - 1]) {
      return false;
    }
  }
  return true;

}
console.log(isPalindrome('12321'));



//Pliandrome using recursion
isPalindrome = (string) => {
  let strLen = string.length;
  string = string.toLocaleLowerCase();

  if (strLen === 0 || strLen === 1) {
    return true;
  }
  if (string[0] === string[strLen - 1]) {
    return isPalindrome(string.slice(1, strLen - 1));
  }
  return false;
};


