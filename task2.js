// let arr = ['a', 'p', 'o', 'i', 'r', 'u', 'x', 'a','i', 'e', 'a', 'o'];

let Vowels = function(arr) {
  let num = 0;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === "a" || arr[i] === "e" ||arr[i] === "i" ||arr[i] === "o" ||arr[i] === "u") {
      num++
    }
  }
  return num;
}
// console.log(Vowels(arr));
console.log(Vowels( ['a', 'p', 'o', 'i', 'r', 'u', 'x', 'a','i', 'e', 'a', 'o']));


