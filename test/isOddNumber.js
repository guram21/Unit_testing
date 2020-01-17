const assert = require('assert');
const {expect} = require('chai');
const {isOddNumber} = require('../index');

describe('function isOddNumber', () => {
  it('should return true if entry is odd number', () => {
    assert.equal(isOddNumber(1), true);
  });
  // Chai
  it('should return true if entry is odd number', () => {
    expect(isOddNumber(1)).true;
  });

  it('should return false if entry is not odd number', () => {
    assert.notEqual(isOddNumber(2), true);
  });
  // Chai
  it('should return false if entry is not odd number', () => {
    expect(isOddNumber(2)).false;
  });

  it('should return "Enter numeric value" if entry is NaN', () => {
    assert.equal(isOddNumber(NaN), 'Enter numeric value');
  });
  // Chai
  it('should return "Enter numeric value" if entry is NaN', () => {
    expect(isOddNumber(NaN)).eq('Enter numeric value');
  });

  it('should return "Enter numeric value" if entry is string', () => {
    assert.equal(isOddNumber('1'), 'Enter numeric value');
  });
  // Chai
  it('should return "Enter numeric value" if entry is string', () => {
    expect(isOddNumber('1')).eq('Enter numeric value');
  });

  it('should return "Enter numeric value" if entry is empty', () => {
    assert.equal(isOddNumber(), 'Enter numeric value');
  });
  // Chai
  it('should return "Enter numeric value" if entry is empty', () => {
    expect(isOddNumber()).eq('Enter numeric value');
  });
});