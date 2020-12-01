//Given a list of daily temperatures T, return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature. If there is no future day for which this is possible, put 0 instead.

//For example, given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76, 73], your output should be [1, 1, 4, 2, 1, 1, 0, 0].

var dailyTemperatures = function (T) {
  var warm = [];
  for (var i = 0; i < T.length; i++) {
    for (var j = i + 1; j < T.length; j++) {
      if (T[j] > T[i]) {
        warm.push(j - i);
        break;
      } else {
        if (j == T.length - 1) {
          warm.push(0);
        }
      }
    }
  }
  warm.push(0);
  return warm;
};

console.log(dailyTemperatures([73, 74, 80, 71, 69, 72, 76, 73]));

/*   var warm = [];
  for (var i = 0; i < T.length; i++) {
    for (var j = i + 1; j < T.length; j++) {
      if (T[j] > T[i]) {
        warm.push(j - i);
        break;
      } else {
        if (T[i] > T[j] && j < (T.length-1)) {
          continue;
        } else {
          warm.push(0);
        }
      }
    }
  }
  return warm;
};  */