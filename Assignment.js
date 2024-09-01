// Q:1. Write a JavaScript program to sum the multiples of 3 and 5 under 1000.

let sum = 0;
let i = 1;

while (i < 1000) {
  if (i % 3 === 0 || i % 5 === 0) {
    sum += i;
  }
  i++;
}

console.log(sum);                 // Output: 233168





// Q:2. Write a JavaScript program that iterates from 1 to 100. For multiples of three print "Hello" instead 
// of the number and for multiples of five print "SeeBiz". For numbers that are multiples of both three and 
// five print "Bye".

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("Bye");
    } else if (i % 3 === 0) {
      console.log("Hello");
    } else if (i % 5 === 0) {
      console.log("SeeBiz");
    } else {
      console.log(i);
    }
  }






// Q:3. Write a JS code to delete all occurrences of elements in the given array (Make your own array).

 // Example array
const myArray = ["apple", "banana", "orange", "apple", "pear", "apple"];

  // Remove all occurrences of "apple"
const newArray = myArray.filter((elem) => elem !== "apple");
console.log(newArray);           // Output: ["banana", "orange", "pear"]






// Q:4. Write a JavaScript program to compute the sum of the two given integers. If the two values are the 
// same, then return triple their sum. 

function sumTriple(a, b) {
  return (a === b) ? 3 * (a + b) : a + b;
}

          // Example 1: Same values
console.log(sumTriple(5, 5));             // Output: 30 (triple the sum of 10)

          // Example 2: Different values
console.log(sumTriple(10, 20));           // Output: 30 (sum of 10 and 20)

          // Example 3: Negative values
console.log(sumTriple(-7, -7));           // Output: -42 (triple the sum of -14)






// Q:5. Write a JavaScript program to check two given numbers and return true if one of the numbers is 50 
// or if their sum is 50.

function check50(a, b) {
  return (a === 50 || b === 50 || a + b === 50);
}

          // Example 1: One number is 50
console.log(check50(50, 10));               // Output: true

          // Example 2: Sum is 50
console.log(check50(15, 35));               // Output: true






// Q:6. Write a JavaScript program to check from two given integers, whether one is positive and another 
// one is negative.

function checkInt(a, b) {
  return ((a > 0 && b < 0) || (a < 0 && b > 0));
}

        // Example 1: Positive and negative integers
console.log(checkInt(5, -3));               // Output: true

        // Example 2: Both integers are positive
console.log(checkInt(10, 20));               // Output: false

       // Example 3: Both integers are negative
console.log(checkInt(-8, -15));              // Output: false







// Q:7. Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given 
// string begins with "Py, “ return the original string.

function addPy(str) {
  if (str.startsWith("Py")) {
    return str;
  } else {
    return "Py" + str;
  }
}

            // Example: String does not start with "Py"
console.log(addPy("thon"));                    // Output: "Python"
                






// Q:8. Write a JavaScript program to create a new string from a given string changing the position of the 
// first and last characters. The string length must be greater than or equal to 1.

function changePos(str) {
  if (str.length < 2) {
    return str;
  } else {
    return str.charAt(str.length - 1) + str.substring(1, str.length - 1) + str.charAt(0);
  }
}

       // Example 1: String with length greater than or equal to 2
console.log(changePos("world"));             // Output: "dlrow"

       // Example 2: String with length 2
console.log(changePos("hi"));                // Output: "ih"

       // Example 3: String with length 3
console.log(changePos("hey"));                // Output: "yeh"








// Q:9. Write a JavaScript program to check whether a given positive number is a multiple of 3 or a 
// multiple of 7.

function MultNumb(num) {
  if (num <= 0) {
    return false; // not a positive number
  }
  if (num % 3 === 0 || num % 7 === 0) {
    return true; // is a multiple of 3 or 7
  } else {
    return false; // is not a multiple of 3 or 7
  }
}

       // Example 1: Positive multiple of 3
console.log(MultNumb(9));                // Output: true

       // Example 2: Positive multiple of 7
console.log(MultNumb(21));                // Output: true
               
       // Example 3: Positive number that is not a multiple of 3 or 7
console.log(MultNumb(8));                // Output: false

       // Example 4: Non-positive number
console.log(MultNumb(-5));                // Output: false







// Q:10. Write a JavaScript program to check two given non-negative integers that determine whether one 
// of the numbers (not both) is a multiple of 7 or 11.

function MultipleOfSeven(num1, num2) {
  return ((num1 % 7 === 0 || num1 % 11 === 0) && (num2 % 7 !== 0 && num2 % 11 !== 0)) || ((num1 % 7 !== 0 && num1 % 11 !== 0) && (num2 % 7 === 0 || num2 % 11 === 0));
}

        // Example 1: One number is a multiple of 7
console.log(MultipleOfSeven(14, 25));            // Output: true

        // Example 2: One number is a multiple of 11
console.log(MultipleOfSeven(35, 44));            // Output: true

        // Example 3: Neither number is a multiple of 7 or 11
console.log(MultipleOfSeven(5, 12));            // Output: false






// Q:11. Write a JavaScript program to replace every character in a given string with the character 
// following it in the alphabet.

function replaceWithNextChar(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    newStr += String.fromCharCode(charCode + 1);
  }
  return newStr;
}

// Example
console.log(replaceWithNextChar("abc"));       // Output: "bcd"








// Q:12. Write a JavaScript program to convert the letters of a given string in alphabetical order.

function sortLetters(str) {
  let letters = str.split(""); // Split the string into an array of letters
  letters.sort(); // Sort the letters in alphabetical order
  return letters.join(""); // Join the sorted letters back into a string
}

// Example
console.log(sortLetters("hello world")); // Output: "dehllloorw"






// Q:13. Write a JavaScript program to count the number of vowels in a given string.

function count(str) {
  return str.match(/[aeiou]/gi).length;
}

// Example
console.log(count("hello world")); // Output: 3





// Q:14. Write a JavaScript program to concatenate two strings except for their first character.

function concatStrings(str1, str2) {
  return str1.slice(1) + str2.slice(1);
}

// Example
console.log(concatStrings("hello", "world")); // Output: "elloorld"







// Q:15. Write a JavaScript program to move the last three characters to the start of a given string. The 
// string length must be greater or equal to three.

function move(str) {
  if (str.length < 3) {
    return "String length must be greater or equal to 3";
  } else {
    return str.slice(-3) + str.slice(0, -3);
  }
}

// Example
console.log(move("hello world")); // Output: "rldhello wo"





// Q:16. Write a JavaScript program to check whether it is possible to replace $ in a given expression x $ y = 
// z with one of the four signs +, -, *, or / to obtain a correct expression.

let x = 10;
let y = 5;
let z = 50;
let expression = `${x} $ ${y} = ${z}`;   //Resul:   True






// Q:17. Write a JavaScript program to find the number which appears most in a given array of integers. 

const arr = [1, 2, 3, 2, 2, 4, 5, 2, 1];
let mostFrequent = 0;
let count = 0;

for (let i = 0; i < arr.length; i++) {
  let tempCount = 0;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      tempCount++;
    }
  }
  if (tempCount > count) {
    count = tempCount;
    mostFrequent = arr[i];
  }
}

console.log(mostFrequent);      // Output: 2






// Q:18. Write a JavaScript program to check a number from three given numbers where two numbers are 
// equal, and find the third one.

let num1 = 5;
let num2 = 3;
let num3 = 5;

if (num1 === num2) {
  console.log(`The third number is ${num3}`);
} else if (num1 === num3) {
  console.log(`The third number is ${num2}`);
} else {
  console.log(`The third number is ${num1}`);
}







// Q:20 Write a JavaScript program to get the difference between a given number and 13, if the number is 
// greater than 13 return double the absolute difference.

function Diff(num) {
  if (num <= 13) {
    return 13 - num;
  } else {
    return (num - 13) * 2;
  }
}

console.log(Diff(7)); // Output: 6
console.log(Diff(20)); // Output: 14






// Q:21 Write a JavaScript program to check whether two given integer values are in the range 50..99 
// (inclusive). Return true if either of them is in the said range.

function checkRange(num1, num2) {
  if ((num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99)) {
    return true;
  } else {
    return false;
  }
}

console.log(checkRange(25, 90)); // returns true
console.log(checkRange(100, 30)); // returns false







// Q:22 Write a JavaScript program to check the total marks of a student in various examinations. The 
// student will get an A+ grade if the total marks are in the range 89..100 inclusive, if the examination is 
// "Final-exam." the student will get an A+ grade and the total marks must be greater than or equal to 90. 
// Return true if the student gets an A+ grade or false otherwise.

function GradeCheck(marks, examType) {
  let totalMarks = marks.reduce((acc, curr) => acc + curr);
  
  if (totalMarks >= 89 && totalMarks <= 100) {
    if (examType === "Final-exam" && totalMarks >= 90) {
      return true;
    } else if (examType !== "Final-exam") {
      return true;
    }
  }
  
  return false;
}

// example usage
console.log(GradeCheck([70, 80, 90, 95], "Midterm")); // false
console.log(GradeCheck([80, 85, 90, 95], "Final-exam")); // true







// Q:23 Write a JavaScript program to create a new string with the first 3 characters in lowercase from a 
// given string. If the string length is less than 3 convert all the characters in upper case.

function convertString(str) {
  if (str.length < 3) {
    return str.toUpperCase();
  } else {
    var firstThreeChars = str.substring(0, 3).toLowerCase();
    var remainingChars = str.substring(3);
    return firstThreeChars + remainingChars;
  }
}

console.log(convertString("JavaScript")); // Output: "javascript"
console.log(convertString("js")); // Output: "JS"
console.log(convertString("JS")); // Output: "JS"







// Q:24 Write a JavaScript program to capitalize the first letter of each word of a given string. 

function capitalizeWords(str) {
  // Split the string into an array of words
  let words = str.split(" ");
  // Iterate over each word
  for (let i = 0; i < words.length; i++) {
    // Capitalize the first letter of the word and concatenate it with the rest of the word
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  // Join the array of words back into a string and return it
  return words.join(" ");
}

// Example usage
console.log(capitalizeWords("hello how are you")); // Output: "Hello How Are You"







// Q:25 Write a JavaScript program to convert a given number to hours and minutes.

function convertToHoursAndMinutes(num) {
  let hours = Math.floor(num / 60);
  let minutes = num % 60;
  return `${hours} hours, ${minutes} minutes`;
}

console.log(convertToHoursAndMinutes(150)); // output: 2 hours, 30 minutes
console.log(convertToHoursAndMinutes(60)); // output: 1 hour, 0 minutes
console.log(convertToHoursAndMinutes(30)); // output: 0 hours, 30 minutes





// Q:26 Write a JavaScript program to check whether a given string contains an equal number of p's and 
// t's.

function equalPt(str) {
  // count the number of 'p's and 't's in the string
  let pCount = 0;
  let tCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'p' || str[i] === 'P') {
      pCount++;
    } else if (str[i] === 't' || str[i] === 'T') {
      tCount++;
    }
  }
  
  // check if the counts are equal
  return pCount === tCount;
}

// example usage
console.log(equalPt("potato")); // true
console.log(equalPt("testing")); // false
console.log(equalPt("pat")); // false
console.log(equalPt("")); // true






// Q:27 Write a JavaScript program to concatenate two strings except for their first character. 

function concatStrings(str1, str2) {
  return str1.substring(1) + str2.substring(1);
}

console.log(concatStrings("Hello", "World")); // Output: "elloorld"






// Q:28.. Write a JavaScript program to test whether an array of integers of length 2 contains 1 or a 3.

function containsOneOrThree(arr) {
  return arr.includes(2) || arr.includes(3);
}

console.log(containsOneOrThree([2, ])); // true
console.log(containsOneOrThree([3, 9])); // true
console.log(containsOneOrThree([7, 6])); // false







// Q:29 Write a JavaScript program to find the longest string from a given array of strings.

const strings = ["apple", "banana", "orange", "grapefruit"];
let longest = strings[0];

for (let i = 1; i < strings.length; i++) {
  if (strings[i].length > longest.length) {
    longest = strings[i];
  }
}

console.log("Longest string: " + longest); // Output: "Longest string: grapefruit"







// Q:30 Write a JavaScript program to find the types of a given angle.
// Types of angles: 
// Acute angle: An angle between 0 and 90 degrees. 
// Right angle: A 90-degree angle. 
// Obtuse angle: An angle between 90 and 180 degrees. 
// Straight angle: A 180-degree angle.

const angle = 45;
if (angle < 90) {
  console.log("Acute angle");
} else if (angle === 90) {
  console.log("Right angle");
} else if (angle < 180) {
  console.log("Obtuse angle");
} else if (angle === 180) {
  console.log("Straight angle");
} else {
  console.log("Invalid angle");
}                        //  Output: Acute angle
  



                   
              
//  Q:31 Write a JavaScript program to find the number which appears most in a given array of integers.                   

const arr1 = [3, 5, 2, 7, 5, 8, 5, 2, 5];
let count = 0;
let Frequent;

for (let i = 0; i < arr1.length; i++) {
  let tempCount = 0;
  for (let j = i + 1; j < arr1.length; j++) {
    if (arr1[i] === arr1[j]) {
      tempCount++;
    }
  }
  if (tempCount > count) {
    count = tempCount;
    Frequent = arr1[i];
  }
}

console.log("The most frequent number is: " + Frequent);          // Output: The most frequent number is: 5
                  






// Q:34 Write a JavaScript program to sort an array of all prime numbers between 1 and a given integer. 

function Prime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function primeSort(n) {
  const primes = [];
  for (let i = 2; i <= n; i++) {
    if (Prime(i)) primes.push(i);
  }
  return primes.sort((a, b) => a - b);
}

// Example usage:
console.log(primeSort(20)); // Output: [2, 3, 5, 7, 11, 13, 17, 19]










// Q: 35 Write a JavaScript program to calculate the sum of n + n/2 + n/4 + n/8 + .... Where n is a positive 
// integer and all divisions are integers.

function calculateSum(n) {
  let sum = 0;
  while (n >= 1) {
    sum += n;
    n = Math.floor(n / 2);
  }
  return sum;
}

// Example usage:
console.log(calculateSum(10)); // Output: 19





// Q:38 Given an array of integer numbers and an integer target, return indices of the two numbers such 
// that they add up to the target. You may assume that each input would have exactly one solution, and 
// you may not use the same element twice. You can return the answer in any order.

function twoSum(nums, target) {
  const indices = new Map(); // Create a hash map to store the indices of each number
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]; // Calculate the complement of the current number
    if (indices.has(complement)) { // Check if the complement is already in the hash map
      return [indices.get(complement), i]; // Return the indices of the two numbers
    }
    indices.set(nums[i], i); // Store the current number and its index in the hash map
  }
  return null; // Return null if no solution found
}

// Example 1
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target)); // Output: [0, 1]




function twoSum(nums, target) {
  const indices = new Map(); // Create a hash map to store the indices of each number
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]; // Calculate the complement of the current number
    if (indices.has(complement)) { // Check if the complement is already in the hash map
      return [indices.get(complement), i]; // Return the indices of the two numbers
    }
    indices.set(nums[i], i); // Store the current number and its index in the hash map
  }
  return null; // Return null if no solution found
}








// Q:39 Given an integer x, return true if x is a palindrome, and false otherwise. 


// Example 1: Input: x = 121 

// Output: true 

// Explanation: 121 reads as 121 from left to right and from right to left.


function Palindrome(x) {
  if (x < 0) return false; // negative numbers are not palindromes

  // convert integer to string and split into an array of characters
  const chars = String(x).split('');

  // iterate through half the array and compare characters
  for (let i = 0; i < Math.floor(chars.length / 2); i++) {
    if (chars[i] !== chars[chars.length - 1 - i]) {
      return false;
    }
  }

  // if we make it through the loop, the integer is a palindrome
  return true;
}

// example usage
console.log(Palindrome(121)); // true
console.log(Palindrome(-121)); // false (negative numbers are not palindromes)
console.log(Palindrome(10)); // false








// Q:40 You are given an m x n integer grid account where accounts[i][j] is the amount of money the ith 
// customer has in the jth bank. Return the wealth that the richest customer has. A customer's wealth is 
// the amount of money they have in all their bank accounts. The richest customer is the customer that has 
// the maximum wealth. 


// Example 1: Input: accounts = [[1,2,3],[3,2,1]] 
// Output: 6 
// Explanation: 1st customer has wealth = 1 + 2 + 3 = 6 2nd customer has wealth = 3 + 2 + 1 = 6 Both 
// customers are considered the richest with a wealth of 6 each, so return 6. 



function maximumWealth(accounts) {
  let maxWealth = 0;
  for (let i = 0; i < accounts.length; i++) {
    let wealth = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      wealth += accounts[i][j];
    }
    if (wealth > maxWealth) {
      maxWealth = wealth;
    }
  }
  return maxWealth;
}

// Example usage:
console.log(maximumWealth([[1,2,3],[3,2,1]])); // Output: 6
