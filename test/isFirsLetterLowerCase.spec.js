const assert = require('assert');
const {expect} = require('chai');
const {isFirsLetterLowerCase} = require('../index');

describe('function isFirsLetterLowerCase', () => {

  it('should return true if first letter lowercase', () => {
    assert.equal(isFirsLetterLowerCase('string'), true);
  });
  // Chai
  it('should return true if first letter lowercase', () => {
    expect(isFirsLetterLowerCase('string')).true;
  });

  it('should return false if first letter not lowercase', () => {
    assert.equal(isFirsLetterLowerCase('String'), false);
  });
  // Chai
  it('should return false if first letter not lowercase', () => {
    expect(isFirsLetterLowerCase('String')).false;
  });

  it('should return false for not string value', () => {
    assert.equal(isFirsLetterLowerCase(123), false);
  });
  // Chai
  it('should return false for not string value', () => {
    expect(isFirsLetterLowerCase(123)).false;
  });

  it('should return false for empty value',()  => {
    assert.equal(isFirsLetterLowerCase(''), false);
  });
  // Chai
  it('should return false for empty value',()  => {
    expect(isFirsLetterLowerCase('')).false;
  });

});