// Function: Adult?
const isAdult = num => num <= 0 ? false : num > 17;

// Function: Sort array numbers in ascending order
const sortArrayUp = arr => arr.sort((a, b) => a - b);

// Function: Sort array numbers in descending order
const sortArrayDown = arr => arr.sort((a, b) => b - a);

// Function: Palindrome?
const isPalindrome = str =>
  !isNaN(str) ? false :
    typeof str !== 'string' ? false :
      !/^[a-zA-Z]*$/.test(str) ? false :
        (str = str.toLowerCase()) === str.split``.reverse().join ``;

// Function: Odd number?
const isOddNumber = num => typeof num !== 'number' || isNaN(num) ? false : num % 2 !== 0;

// Function: Even number?
const isEvenNumber = num => typeof num !== 'number' || isNaN(num) ? false : num % 2 === 0;

// Function: First letter Uppercase?
const isFirstLetterUpperCase = str =>
  !isNaN(str) ? false :
    typeof str !== 'string' ? false :
      !/^[a-zA-Z]*$/.test(str) ? false :
        str[0] === str[0].toUpperCase();

// Function: First letter Lowercase?
const isFirsLetterLowerCase = str =>
  !isNaN(str) ? false :
    typeof str !== 'string' ? false :
      !/^[a-zA-Z]*$/.test(str) ? false :
        str === str.toLowerCase();

// Function: Integer?
const isInteger = num => (num ^ 0) === num;

// Function: Replace spaces with underscore
const spaceToUnderscore = str => str.replace(/[' ']/g, '_');

module.exports = {
  isAdult,
  sortArrayUp,
  sortArrayDown,
  isPalindrome,
  isOddNumber,
  isEvenNumber,
  isFirstLetterUpperCase,
  isFirsLetterLowerCase,
  isInteger,
  spaceToUnderscore
};