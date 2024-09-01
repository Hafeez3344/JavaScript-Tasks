// const arr = [1,22,3,44,56];

// for (let i = 0; i < arr.length; i++){
//   for (let j = 0; j < arr.length; j++){
//     if (arr[i] < arr[j]){
//       let store = arr[i];
//       arr[i] = arr[j];
//       arr[j] = store;
//     }
//   }
// };
// console.log(arr);
// console.log(arr);    sorted array
// console.log(arr[arr.length-1]); find largest number in the array
// console.log(arr[0]);  find the smallest number in the array




// shuffle the array

// let arr = [55,32,44,21,7];
// for(let i = 0; i < arr.length; i++){
//   for(let j = 0; j < arr.length; j++){
//     let store = arr[i];
//     arr[i] = arr[j];         
//     arr[j] = store;
//   }
// }
// console.log(arr)





// function fn(num){
//   if(num <1){
//     return num;
//   }
//   console.log(num)
//   return fn(num/2);
// }
// console.log(fn(64));




// let arr = [1,2,3,5,6,4,0];
// let arr2 = [9,8,7,44,33,21];
// for(let i=0; i<arr2.length;i++){
//   arr.push(arr2[i])
// }
// console.log(arr);






// let arr = [44,3,22,5,66];

// let smallest = arr[0];
// let largest = arr[0];

// for(let i = 0; i < arr.length; i++){
//   if (arr[i] < smallest){
//     smallest = arr[i];
//   }
//   if (arr[i] > largest)
//   largest = arr[i];
// }
// console.log(`Smallest Value: ${smallest}`);
// console.log(`Largest Valuse: ${largest}`);




// function countDown(fromNumber) {
//     console.log(fromNumber);
//     // return fromNumber;

//     let nextNumber = fromNumber - 1;

//     if (nextNumber > 0) {
//         countDown(nextNumber);
//     }
// }
// countDown(10);





// let arr = [1,3,4,5,6];
// console.log(arr[arr.length-3]);



// let arr = [1,3,4,5,6];
// revrse = [];

// for (let i = arr.length-1; i >= 0; i--){
//   revrse.push(arr[i]);
// }
// console.log(revrse);