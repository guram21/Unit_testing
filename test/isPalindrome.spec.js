const assert = require('assert');
const {expect} = require('chai');
const {isPalindrome} = require('../index');

describe('function isPalindrome', () => {
  it('should return true if value is palindrome', () => {
    assert.equal(isPalindrome('ANNA'), true);
  });
  it('should return false if value is not palindrome', () => {
    assert.notEqual(isPalindrome('ANNA'), false)
  });
  it('should return false if value is not string', () => {
    assert.equal(isPalindrome(192), "It is not a string!")
  });
  it('should return true for an empty string',()  => {
    assert.equal(isPalindrome(''), true)
  });
});