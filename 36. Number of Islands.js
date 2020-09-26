// o(rows x columns)
// Using DFS
  var numberOfIslands = function(grid){
   var rows = grid.length;
   if(rows === 0){
     return 0;
   } else {
     var cols = grid[0].length;
   }
   var islands = 0;
   var i, j;

    for(i =0; i<rows; i++){
      for(j=0; j<cols; j++){
        if(grid[i][j] === "1"){
           
          mark_current_island(grid, i, j, rows, cols);
          islands++;
        }
      }
    }
       function mark_current_island(matrix, x, y, r, c) {
         
         //Boundary case for matrix
         if (x < 0 || x >= r || y < 0 || y >= c || matrix[x][y] !== "1") {
           return;
         }
         //Mark current cell as visited
         matrix[x][y] = "2";
         //Make recursive call in all 4 adjacent directions
         mark_current_island(matrix, x + 1, y, r, c); //DOWN
         mark_current_island(matrix, x, y + 1, r, c); //RIGHT
         mark_current_island(matrix, x - 1, y, r, c); //TOP
         mark_current_island(matrix, x, y - 1, r, c); //LEFT
       }
    return islands;
}
console.log(numberOfIslands(
  [
   
  ],
));