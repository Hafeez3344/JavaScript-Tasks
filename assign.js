//  ASSIGNMENT #1

// let arr=["a",1,[33,44,44,55],44,33,33,["a",22,"DD",44,66],"f","ali",5]
// var a=0;
// var b;
// c=0;
// d=0;let e;
// for(i=0;i<arr.length;i++){
// e=arr[i]
//  if(typeof e == typeof a){
//      d+=e
//    }
//  for(j=0;j<arr[i].length;j++){
//    b=arr[i][j];
//    if(typeof b == typeof a){
//      c+=b
//    }
//  }
// }
// console.log('First Level sum' ,d)
// console.log('Second Level sum' ,c)
// console.log('Total Sum = ',d+c)

// 	ASSIGNMENT #2
let arr = [[10, 3, 5], 2, 4, 600, 9000, [10000, 2, 88]];
var a, d;
var b = 0;
var e = 0;
var f = 1;
var g = 1;
for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < arr[i].length; j++) {
    a = arr[i][j];
    if (a > b) {
      b = a;
    }
    f = arr[0][0];
    for (let k = 0; k < arr.length; k++) {
      if (arr[k] < f) {
        f = arr[k];
      }
    }
  }
  if (typeof arr[i] == typeof b) {
    d = arr[i];
    if (d > e) {
      e = d;
    }
    g = arr[i];
    for (let l = 1; l < arr.length; l++) {
      if (arr[l] < g) {
        g = arr[l];
      }
    }
  }
}
if (e > b) {
  console.log("Largest number in Array is", e);
}

if (b > e) {
  console.log("Largest number in Array is", b);
}
if (f <= g) {
  console.log("Smalest number in Array is", f);
} else {
  console.log("Smalest number in Array is", g);
}
