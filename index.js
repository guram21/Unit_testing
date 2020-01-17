// Function: Is an adult?
const isAdult = num => num <= 0 ? undefined : num > 17;

// Function: Sort numbers in an array in ascending order
const sortArrayUp = arr => arr.sort((a, b) => a - b);

// Function: Sort numbers in an array in descending order
const sortArrayDown = arr => arr.sort((a, b) => b - a);

// Function: Is it Palindrome?
const isPalindrome = str => (str = str.toLowerCase()) === str.split``.reverse().join``;

// Function: Is it an Odd number?
const isOddNumber = num => typeof num !== 'number' || isNaN(num) ? 'Enter numeric value' : num % 2 !== 0;

// Function: Is it an Even number?
const isEvenNumber = num => num % 2 === 0;

// Function: Is it string in Uppercase?
const isUpperCase = str => str === str.toUpperCase();

// Function: Is it string in Lowercase?
const isLowerCase = str => str === str.toLowerCase();

// Function: Is a number Integer?
const isInteger = num => (num ^ 0) === num;

// Function: Replace spaces in a string with underscore
const spaceToUnderscore = str => str.replace(/[' ']/g, '_');

module.exports = {
  isAdult,
  sortArrayUp,
  sortArrayDown,
  isPalindrome,
  isOddNumber,
  isEvenNumber,
  isUpperCase,
  isLowerCase,
  isInteger,
  spaceToUnderscore
};