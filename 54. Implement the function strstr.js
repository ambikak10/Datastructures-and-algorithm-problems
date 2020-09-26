var kmp = function(pattern){
    var m = pattern.length;
    f=[];
    f[0] = 0;

    var i = 1;
    var j = 0;

    while (i < m) {
        if (pattern[i] == pattern[j]) {
            f[i] = j + 1;
            i++;
            j++;
        } else if (j > 0) {
            j = f[j - 1];
        } else {
            f[i] = 0;
            i++;
        }
    }
    return f;
}

var ststr = function(text, pattern) {
    f = kmp(pattern);

    var m = pattern.length;
    var n = text.length;

    var i = 0;
    var j = 0;

    while (i < n) {
        if (pattern[j] == text[i]) {
            if (j == m - 1){
                return i - (m - 1);
            } else {
                i++;
                j++;
            }
        } else if (j > 0) {
            j = f[j - 1];
        } else {
            i++;
        }
    }
    return -1;
}
console.log(ststr("paradox", "rad"))
//o(m+n)
// o(m)