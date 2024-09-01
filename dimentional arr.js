//larges number//

// let arr=[[1,3,4],14,55,5,49,[66,77,88]];
// let array=arr[0][0]
// for(a=0; a<arr.length;a++){
//   for(b=0; b<arr[a].length;b++){
//     if(arr[a][b]>array){
//       array=arr[a][b];
//     }
//   }
// }



// /smallest number//

// console.log(array);
// let arr=[[1,3,4],14,55,5,49,[66,77,88]];
// let array=arr[0][0]
// for(a=0; a<arr.length;a++){
//   for(b=0; b<arr[a].length;b++){
//     if(arr[a][b]<array){
//       array=arr[a][b];
//     }
//   }
// }
// console.log(array);



// sum of 1 level 2nd level//

let arr=["a",1,[33,44,55],44,33,33,["a",22,"DD",44,66],"f","ali",5];
let first=0;
for(i=0;i<arr.length;i++){
  first += arr[i]
}
console.log(first)
let second=0;
for(i=0;i<arr.length;i++){
  for(j=0; j<arr[i].length;j++){
    second += arr[i][j];
  }
}
console.log(second)

let third= first +second
console.log(third)