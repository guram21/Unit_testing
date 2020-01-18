const assert = require('assert');
const {expect} = require('chai');
const {isEvenNumber} = require('../index');

describe('function isEvenNumber', () => {

  it('should return true if value is even number', () => {
    assert.equal(isEvenNumber(2), true);
  });
  // Chai
  it('should return true if value is even number', () => {
    expect(isEvenNumber(2)).true;
  });

  it('should return false if value is not even number', () => {
    assert.notEqual(isEvenNumber(1), true);
  });
  // Chai
  it('should return false if value is not even number', () => {
    expect(isEvenNumber(1)).false;
  });

  it('should return false if value is NaN', () => {
    assert.notEqual(isEvenNumber(NaN), true);
  });
  // Chai
  it('should return false if value is NaN', () => {
    expect(isEvenNumber(NaN)).false;
  });

  it('should return false if value is string', () => {
    assert.notEqual(isEvenNumber('1'), true);
  });
  // Chai
  it('should return false if value is string', () => {
    expect(isEvenNumber('1')).false;
  });

  it('should return false for empty value', () => {
    assert.notEqual(isEvenNumber(''), true);
  });
  // Chai
  it('should return false for empty value', () => {
    expect(isEvenNumber('')).false;
  });

});