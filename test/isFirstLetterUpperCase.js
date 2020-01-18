const assert = require('assert');
const {expect} = require('chai');
const {isFirstLetterUpperCase} = require('../index');

describe('function isFirstLetterUpperCase', () => {

  it('should return true if first letter of value is uppercase', () => {
    assert.equal(isFirstLetterUpperCase('String'), true);
  });
  // Chai
  it('should return true if value is palindrome', () => {
    expect(isFirstLetterUpperCase('String')).true;
  });

  it('should return false if value is not palindrome', () => {
    assert.notEqual(isFirstLetterUpperCase('string'), true);
  });
  // Chai
  it('should return false if value is not palindrome', () => {
    expect(isFirstLetterUpperCase('string')).false;
  });

  it('should return false if value is not string', () => {
    assert.notEqual(isFirstLetterUpperCase(123), true);
  });
  // Chai
  it('should return false if value is not string', () => {
    expect(isFirstLetterUpperCase(123)).false;
  });

  it('should return false if value is string with numbers', () => {
    assert.notEqual(isFirstLetterUpperCase('123'), true);
  });
  // Chai
  it('should return false if value is string with numbers', () => {
    expect(isFirstLetterUpperCase('123')).false;
  });

  it('should return false for empty value',()  => {
    assert.notEqual(isFirstLetterUpperCase(), true);
  });
  // Chai
  it('should return false for empty string',()  => {
    expect(isFirstLetterUpperCase()).false;
  });

});