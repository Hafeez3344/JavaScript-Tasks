

// let arr = ['level', 'radar', 'simple', 'yes'];

// for (let i = 0; i < arr.length; i++) {
//   let str = arr[i];
//   let reverse = "";

//   for (let j = str.length - 1; j >= 0; j--) {
//     reverse += str[j];
//   }

//   if (str === reverse) {
//     console.log(str + " is a palindrome");
//   } else {
//     console.log(str + " is not a palindrome");
//   }
// }




// let str = "is any words is palandrom in this string radar level";
// let a = str.split(" ");
// let result = [];
// for (let i = 0; i < a.length; i++) {
//   let b = a[i];
//   let revrse = b.split("").reverse().join("");
//   if (b === revrse) {
//     result.push(b);
//   }
// }
// console.log(result);




// let str = 'radar';
// let x = str.split("");
// let y = x.reverse();
// let z = y.join("");

// if (z == str){
  
//   console.log(`${str} : Reverse is Same`);
  
// } else {
   
//   console.log(`${str} : Reverse is not same`);
  
// }



let str = 'radar';
let Palindrome = '';

for (let i = str.length - 1; i >= 0; i--) {
  Palindrome += str[i];
}

if (Palindrome === str) {
  console.log(`${str} : Reverse is Same`);
} else {
  console.log(`${str} : Reverse is not same`);
}
