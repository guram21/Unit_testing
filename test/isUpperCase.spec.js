const assert = require('assert');
const {expect} = require('chai');
const {isUpperCase} = require('../index');

describe('function isUpperCase', () => {

  it('should return true if value is palindrome', () => {
    assert.equal(isUpperCase('Anna'), true);
  });
  // Chai
  it('should return true if value is palindrome', () => {
    expect(isUpperCase('Anna')).true;
  });

  it('should return false if value is not palindrome', () => {
    assert.notEqual(isUpperCase('String'), true);
  });
  // Chai
  it('should return false if value is not palindrome', () => {
    expect(isUpperCase('String')).false;
  });

  it('should return false if value is not string', () => {
    assert.notEqual(isUpperCase(123), true);
  });
  // Chai
  it('should return false if value is not string', () => {
    expect(isUpperCase(123)).false;
  });

  it('should return false for empty value',()  => {
    assert.equal(isUpperCase(), true);
  });
  // Chai
  it('should return false for empty string',()  => {
    expect(isUpperCase()).false;
  });

});