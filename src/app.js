const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

const printAllPossibleMoves = (row, col) => {
  y = row - 1;
  x = columns.indexOf(col);
  if (x + 2 >= 0 && y + 1 >= 0 && x + 2 < 8 && y + 1 < 8) {
    console.log(columns[y + 1], x + 2 + 1);
  }

  if (x + 2 >= 0 && y - 1 >= 0 && x + 2 < 8 && y - 1 < 8) {
    console.log(columns[y - 1], x + 2 + 1);
  }

  if (x - 2 >= 0 && y + 1 >= 0 && x - 2 < 8 && y + 1 < 8) {
    console.log(columns[y + 1], x - 2 + 1);
  }

  if (x - 2 >= 0 && y - 1 >= 0 && x - 2 < 8 && y - 1 < 8) {
    console.log(columns[y - 1], x - 2 + 1);
  }

  if (x + 1 >= 0 && y + 2 >= 0 && x + 1 < 8 && y + 2 < 8) {
    console.log(columns[y + 2], x + 1 + 1);
  }

  if (x - 1 >= 0 && y + 2 >= 0 && x - 1 < 8 && y + 2 < 8) {
    console.log(columns[y + 2], x - 1 + 1);
  }

  if (x - 1 >= 0 && y - 2 >= 0 && x - 1 < 8 && y - 2 < 8) {
    console.log(columns[y - 2], x - 1 + 1);
  }

  if (x + 1 >= 0 && y - 2 >= 0 && x + 1 < 8 && y - 2 < 8) {
    console.log(columns[y - 2], x + 1 + 1);
  }
}

var arguments = process.argv;
var row, col;
if (arguments[2] && arguments[3]) {
  col = arguments[2];
  row = arguments[3];
}

if (!columns[row - 1] || !columns.includes(col.toLowerCase())) {
  console.log("Row or column is invalid!");
} else {
  printAllPossibleMoves(row, col.toLowerCase());
}
