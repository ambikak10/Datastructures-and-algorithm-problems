// o(n)
//o(1)

var myAtoi = function (str) {
  var sign = 1,
    base = 0,
    i = 0;
  // if whitespaces then ignore.
  while (str[i] == " ") {
    i++;
  }
  // sign of number
  if (str[i] == "-" || str[i] == "+") {
    // console.log(str[i++] == "-");
    sign = 1 - 2 * (str[i++] == "-"); //(str[i++] == "-") returns true or false, true means 1
  }
  // checking for valid input
  while (str[i] >= "0" && str[i] <= "9") {
    // handling overflow test case

    if (
      base > Math.floor(2147483647 / 10) ||
      (base === Math.floor(2147483647 / 10) && str[i] - "0" > 7) //str[i] - "0" gives ascii value
    ) {
      if (sign == 1) return 2147483647;
      else return -2147483648;
    }

    base = 10 * base + (str[i++] - "0");
  }
  return base * sign;
};
console.log(myAtoi("2147483648"));
