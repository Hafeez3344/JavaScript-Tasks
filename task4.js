

let arr= ['sami', 'hafeezkhan', 'zarban', 'shoab'];

function longeststr(){
  let longest = "";
  for (let i = 0; i < arr.length; i++){
    if (arr[i].length > longest.length){
      longest = arr[i];
    }
  }
  return longest;
}
console.log(longeststr());



// This code defines an array arr with four elements, and then defines a function called longeststr().

// The longeststr() function initializes a variable longest to an empty string. It then loops through each element of the arr array using a for loop.

// During each iteration of the loop, the function compares the length of the current element (arr[i]) to the length of the longest string seen so far. If arr[i] is longer than longest, longest is updated to equal arr[i].

// After the loop completes, the longest variable contains the longest string in the arr array. Finally, the function returns the longest variable.

// The code then calls the longeststr() function and logs its return value to the console using console.log().

// So, in this case, the code will output the string "hafeezkhan", which is the longest string in the arr array

