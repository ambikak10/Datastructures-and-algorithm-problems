// Input: address = "255.100.50.0"
// Output: "255[.]100[.]50[.]0"

var defangIPaddr = function(address) {
         //   // console.log("Hi")
        address = address.replace(/\./g, "[.]")
        console.log(address)
    
    
    return address;
};
console.log(defangIPaddr("255.100.50.0"));

a="S"
a[0]='8'
console.log(a)