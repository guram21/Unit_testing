const assert = require('assert');
const {expect} = require('chai');
const {isPalindrome} = require('../index');

// describe('function isPalindrome', () => {
//   it('should return true if a string is a palindrome', () => {
//     assert.equal(isPalindrome('ogo'), true)
//   });
//   it('should return false if a string is not a palindrome', () => {
//     assert.notEqual(isPalindrome('ogo'), false)
//   });
//   it('should return the message "It is not a string!" if type of input is a number', () => {
//     assert.equal(isPalindrome(192), "It is not a string!")
//   });
//   it('should return true for an empty string',()  => {
//     assert.equal(isPalindrome(''), true)
//   });
// });