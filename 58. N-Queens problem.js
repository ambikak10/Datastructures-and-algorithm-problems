
// var placeQueens = function(row, columns){
//   if(row === GRID_SIZE){
//   console.log(columns);
//   } else {
//     for(var col=0; col< GRID_SIZE; col++){
//       if (checkValid(row, col, columns)){
//         columns[row] = col;
//         placeQueens(row+1, columns);
//       }
//     }
//   }
//   return columns;
// }

var placeQueens = function (row, columns) {
  for (var col = 0; col < GRID_SIZE; col++) {
    if (checkValid(row, col, columns)) {
      columns[row] = col;
      if (row < GRID_SIZE-1)
        placeQueens(row + 1, columns);
      else
        console.log(columns);
    }
  }
};

var checkValid = function(row1, col1, columns){
  for(var row2 = 0; row2 < row1 ; row2++){
    var col2 = columns[row2];
    if(col1 == col2){
      return false;
    }
    var colDistance = Math.abs(col1-col2);
    var rowDistance = Math.abs(row1 - row2);
    if(colDistance == rowDistance){
      return false;
    }
  }
  return true;
}
var arr = [];
var row = 0;
var GRID_SIZE = 4;
var row1, col1;
placeQueens(0, arr);

//o(n) space
// time don't know o(n*n)