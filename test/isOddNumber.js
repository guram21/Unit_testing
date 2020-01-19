const assert = require('assert');
const {expect} = require('chai');
const {isOddNumber} = require('../index');

describe('function isOddNumber', () => {

  it('should return true for odd number value', () => {
    assert.equal(isOddNumber(1), true);
  });
  // Chai
  it('should return true for odd number value', () => {
    expect(isOddNumber(1)).true;
  });

  it('should return false for not odd number value', () => {
    assert.notEqual(isOddNumber(2), true);
  });
  // Chai
  it('should return false for not odd number value', () => {
    expect(isOddNumber(2)).false;
  });

  it('should return false for NaN value', () => {
    assert.notEqual(isOddNumber(NaN), true);
  });
  // Chai
  it('should return false for NaN value', () => {
    expect(isOddNumber(NaN)).false;
  });

  it('should return false for string value', () => {
    assert.notEqual(isOddNumber('1'), true);
  });
  // Chai
  it('should return false for string value', () => {
    expect(isOddNumber('1')).false;
  });

  it('should return false for empty value', () => {
    assert.notEqual(isOddNumber(''), true);
  });
  // Chai
  it('should return false for empty value', () => {
    expect(isOddNumber('')).false;
  });

});