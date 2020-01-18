const assert = require('assert');
const {expect} = require('chai');
const {isPalindrome} = require('../index');

describe('function isPalindrome', () => {
  it('should return true if value is palindrome', () => {
    assert.equal(isPalindrome('ANNA'), true);
  });
  it('should return false if value is not palindrome', () => {
    assert.notEqual(isPalindrome('ANNA'), false);
  });
  it('should return false if value is not string', () => {
    assert.notEqual(isPalindrome(123), true);
  });
  it('should return false for empty value',()  => {
    assert.equal(isPalindrome(''), true);
  });
});