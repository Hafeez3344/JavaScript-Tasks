let str = "hafeezkhan";
let revrse = "";

for (let i = str.length - 1; i >= 0; i--) {
  if (i >= 2 && i <= 3) {
    continue;
    
  }
  revrse += str[i];
}

console.log(revrse); 
