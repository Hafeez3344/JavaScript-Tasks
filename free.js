let table = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]];
let table2d = table.map(function(x) {
  return table.map(function(y) {
    return x + 'X' + y + '=' + x * y;
  });
});
console.log(table2d);
