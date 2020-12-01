var minPathSum = function (grid) {
  console.log(grid.length);
  var n = grid.length,
    m = grid[0].length,
    ans = [];

  for (var i = 0; i < n; i++) {
    ans[i] = [];
  }
  //console.log(ans);

  for (var i = 0; i < n; i++)
    for (var j = 0; j < m; j++) {
      if (i + j === 0) ans[i][j] = grid[i][j];
      else if (i === 0) ans[i][j] = ans[i][j - 1] + grid[i][j];
      else if (j === 0) ans[i][j] = ans[i - 1][j] + grid[i][j];
      else ans[i][j] = grid[i][j] + Math.min(ans[i][j - 1], ans[i - 1][j]);
      //console.log(ans[i][j]);
    }

  return ans[n - 1][m - 1];
};
minPathSum([
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
]);
// o(N x M + n)