let arr = ['a', 'e', 'I', 'O', 'u', 'a', 'e', 'O','u'];
let a = 0;
let e = 0;
let I = 0;
let O = 0;
let u = 0;

for (let i = 0;  i < arr.length; i++){
  if(arr[i] === 'a'){
    a++;
  }else if (arr[i] === 'e'){
    e++;
  }else if (arr[i] === 'I'){
    I++;
  }else if (arr[i] === 'O'){
    O++;
  }else if (arr[i] === 'u'){
    u++;
  }
}
console.log(`a:${a++},e:${e++},I:${I++},O:${O++},u:${u++}`);
