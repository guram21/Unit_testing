const assert = require('assert');
const {expect} = require('chai');
const {isOddNumber} = require('../index');

describe('function isOddNumber', () => {

  it('should return true for odd number', () => {
    assert.equal(isOddNumber(1), true);
  });
  // Chai
  it('should return true for odd number', () => {
    expect(isOddNumber(1)).true;
  });

  it('should return false for not odd number', () => {
    assert.equal(isOddNumber(2), false);
  });
  // Chai
  it('should return false for not odd number', () => {
    expect(isOddNumber(2)).false;
  });

  it('should return false for NaN value', () => {
    assert.equal(isOddNumber(NaN), false);
  });
  // Chai
  it('should return false for NaN value', () => {
    expect(isOddNumber(NaN)).false;
  });

  it('should return false for string value', () => {
    assert.equal(isOddNumber('1'), false);
  });
  // Chai
  it('should return false for string value', () => {
    expect(isOddNumber('1')).false;
  });

  it('should return false for empty value', () => {
    assert.equal(isOddNumber(''), false);
  });
  // Chai
  it('should return false for empty value', () => {
    expect(isOddNumber('')).false;
  });

});