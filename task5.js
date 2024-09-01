function Same(num) {

    let Numstr = num.toString();
    
    for (let i = 1; i < Numstr.length; i++) {
      if (Numstr[i] !== Numstr[0]) {
        return false; 
      }
    }
    
    return true; 
  }
  
  console.log(Same(1111));


// The code is a function that 
// takes a number as an argument 
// and returns a boolean value 
// indicating whether all the digits in 
// the number are the same or not.

// The function first converts the input
//  number to a string using the toString() method. 
//  This makes it easier to work with individual digits
//   of the number.

// Next, the function loops through the string of 
// the number, starting from the second digit (index 1)
//  up to the last digit (index strNum.length - 1). 
//  For each digit in the loop, it checks if it is 
//  equal to the first digit (index 0) of the number.
//   If it is not equal to the first digit, the function 
//   returns false immediately, indicating that not all digits are the same.

// If the loop completes without finding any digit that 
// is different from the first digit, the function returns true,
//  indicating that all digits in the number are the same.

// So, the function checks the equality of each digit of the number
//  with the first digit, and returns false as soon as it finds any 
//  digit that is different from the first digit. If it loops through
//   all the digits without finding any difference, it returns true.