const assert = require('assert');
const {expect} = require('chai');
const {isFirstLetterUpperCase} = require('../index');

describe('function isFirstLetterUpperCase', () => {

  it('should return true if first letter uppercase', () => {
    assert.equal(isFirstLetterUpperCase('String'), true);
  });
  // Chai
  it('should return true if first letter uppercase', () => {
    expect(isFirstLetterUpperCase('String')).true;
  });

  it('should return false if first letter not uppercase', () => {
    assert.equal(isFirstLetterUpperCase('string'), false);
  });
  // Chai
  it('should return false if first letter not uppercase', () => {
    expect(isFirstLetterUpperCase('string')).false;
  });

  it('should return false for not string value', () => {
    assert.equal(isFirstLetterUpperCase(123), false);
  });
  // Chai
  it('should return false for not string value', () => {
    expect(isFirstLetterUpperCase(123)).false;
  });

  it('should return false for empty value',()  => {
    assert.equal(isFirstLetterUpperCase(''), false);
  });
  // Chai
  it('should return false for empty value',()  => {
    expect(isFirstLetterUpperCase('')).false;
  });

});