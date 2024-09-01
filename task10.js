let str = "hafeezkh";

let charactersToRemove = ["a", "b", "c", "d","n", "o", "p", "q", "r", "s"];
let result = "";

for (let i = 0; i < str.length; i++) {
  if (!charactersToRemove.includes(str[i])) {
    result += str[i];
  }
}

console.log(result);
