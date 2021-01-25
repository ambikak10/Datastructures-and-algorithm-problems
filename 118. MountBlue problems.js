var rover = function (a, matrix) {
  var n = matrix.length - 1;
  var hCounter = 0;
  var vCounter = 0;
  for (var i = 0; i < a.length; i++) {
    if (a[i] === "left") {
      if (hCounter > 0) {
        hCounter--;
      }
    }

    if (a[i] === "right") {
      if (hCounter < n) {
        hCounter++;
      }
    }
    if (a[i] === "up") {
      if (vCounter > 0) {
        vCounter--;
      }
    }

    if (a[i] === "down") {
      if (vCounter < n) {
        vCounter++;
      }
    }
  }
  console.log(matrix[1][1]);
  return [hCounter, vCounter];
};

var matrix = [
  [1, 2, 3],
  [5, 6, 7],
  [4, 9, 2],
];
console.log(rover(["left", "left", "right", "up", "down"], matrix));

var stars = function (str) {
  var x = str.indexOf("|");
  console.log(x);
  var y = str.indexOf("|", x);
  console.log(y);
  if (x == -1 || y == -1) {
    return 0;
  } else {
    return x + y - x - 1;
  }
};
console.log(stars("**|*|**"));

var position = function (arr) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) {
      count++;
    }
  }
  return count;
};
console.log(position([1, 2, 5, 4, 3, 6]));


var length = 10;
function fn() {
  console.log(this)
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