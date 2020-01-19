const assert = require('assert');
const {expect} = require('chai');
const {isOddNumber} = require('../index');

describe('function isOddNumber', () => {

  it('should return true if value odd number', () => {
    assert.equal(isOddNumber(1), true);
  });
  // Chai
  it('should return true if value odd number', () => {
    expect(isOddNumber(1)).true;
  });

  it('should return false if value not odd number', () => {
    assert.notEqual(isOddNumber(2), true);
  });
  // Chai
  it('should return false for not odd number value', () => {
    expect(isOddNumber(2)).false;
  });

  it('should return false if value NaN', () => {
    assert.notEqual(isOddNumber(NaN), true);
  });
  // Chai
  it('should return false if value NaN', () => {
    expect(isOddNumber(NaN)).false;
  });

  it('should return false if value string', () => {
    assert.notEqual(isOddNumber('1'), true);
  });
  // Chai
  it('should return false if value is string', () => {
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