const sum = (a, b) => a + b;

const isAdult = num => num > 17;

const sortArrayUp = arr => arr.sort((a, b) => a - b);

const sortArrayDown = arr => arr.sort((a, b) => b - a);

const isPalindrome = str => (str = str.toLowerCase()) === str.split``.reverse().join``;

const isOddNumber = num => num % 2 !== 0;

const isEvenNumber = num => num % 2 === 0;

const isUpperCase = str => str === str.toUpperCase();

const isLowerCase = str => str === str.toLowerCase();

const isInteger = num => (num ^ 0) === num;

module.exports = {sum, isAdult, sortArrayUp, sortArrayDown, isPalindrome, isOddNumber, isEvenNumber, isUpperCase, isLowerCase, isInteger};