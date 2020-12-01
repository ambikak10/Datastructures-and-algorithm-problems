var spiral = function (a, n, m) {
  let top = 0;
  let down = n - 1;
  let left = 0;
  let right = m - 1;
  let dir = 0;
  var i;

  while (top <= down && left <= right) {
    if (dir === 0) {
      for (i = left; i <= right; i++) {
        console.log(a[top][i]);
      }
      top++;
    } else if (dir === 1) {
      for (i = top; i <= down; i++) {
        console.log(a[i][right]);
      }
      right--;
    } else if (dir === 2) {
      for (i = right; i >= left; i--) {
        console.log(a[down][i]);
      }
      down--;
    } else if (dir === 3) {
      for (i = down; i >= top; i--) {
        console.log(a[i][left]);
      }
      left++;
    }
    dir = (dir + 1) % 4;
  }
  return a;
};
var matrix = [
  [1, 2, 3],
  [5, 6, 7],
];
