const assert = require('assert');
const {expect} = require('chai');
const {isPalindrome} = require('../index');

describe('function isPalindrome', () => {

  it('should return true if value is palindrome', () => {
    assert.equal(isPalindrome('Anna'), true);
  });
  // Chai
  it('should return true if value is palindrome', () => {
    expect(isPalindrome('Anna')).true;
  });

  it('should return false if value is not palindrome', () => {
    assert.notEqual(isPalindrome('Guram'), true);
  });
  // Chai
  it('should return false if value is not palindrome', () => {
    expect(isPalindrome('Guram')).false;
  });

  it('should return false if value is not string', () => {
    assert.notEqual(isPalindrome(123), true);
  });
  // Chai
  it('should return false if value is not string', () => {
    expect(isPalindrome(123)).false;
  });

  it('should return false for empty value',()  => {
    assert.equal(isPalindrome(''), true);
  });
  // Chai
  it('should return false for empty string',()  => {
    expect(isPalindrome('')).false;
  });

});