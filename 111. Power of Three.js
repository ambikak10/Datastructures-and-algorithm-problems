var isPowerOfThree = function(n) {
    if (n <= 0) {
        return false;
    }
    if (n === 1) {
        return true;
    }
    while (n % 3 === 0) {
        n /= 3;
    }
    return n === 1;
};
console.log(isPowerOfThree(27));
console.log(isPowerOfThree(29));