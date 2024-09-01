let str = "abcdefghijklmnopqrstuvwxyz";
let reverse = str.split('').reverse();
let rejoin = reverse.join('');
let result = '';

for ( let i = 0; i < reverse.length; i++){
  if (reverse[i] <= 'h'){
    result += reverse[i];
  }
}

result = result.split('').reverse().join('');


console.log(str);
console.log(reverse);
console.log(rejoin);
console.log(result);