const assert = require('assert');
const {expect} = require('chai');
const {isPalindrome} = require('../index');

describe('function isPalindrome', () => {

  it('should return true if value palindrome', () => {
    assert.equal(isPalindrome('Anna'), true);
  });
  // Chai
  it('should return true if value palindrome', () => {
    expect(isPalindrome('Anna')).true;
  });

  it('should return false if value not palindrome', () => {
    assert.equal(isPalindrome('Guram'), false);
  });
  // Chai
  it('should return false if value not palindrome', () => {
    expect(isPalindrome('Guram')).false;
  });

  it('should return false if value not string', () => {
    assert.equal(isPalindrome(123), false);
  });
  // Chai
  it('should return false if value not string', () => {
    expect(isPalindrome(123)).false;
  });

  it('should return false for empty value',()  => {
    assert.equal(isPalindrome(''), false);
  });
  // Chai
  it('should return false for empty string',()  => {
    expect(isPalindrome('')).false;
  });

});