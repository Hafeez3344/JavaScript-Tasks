// let arr = ["I", "study", "JavaScript","math"];

// arr.splice(2, 2); 

// console.log( arr ); 






 let list = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]];
 let list2d = list.map(function(x) {
   return list.map(function(y) {
     return x + 'X' + y + '=' + x * y;
  });
 });
 console.log(list2d);






