const assert = require('assert');
const {expect} = require('chai');
const {isEvenNumber} = require('../index');

describe('function isEvenNumber', () => {

  it('should return true if value even number', () => {
    assert.equal(isEvenNumber(2), true);
  });
  // Chai
  it('should return true if value even number', () => {
    expect(isEvenNumber(2)).true;
  });

  it('should return false if value not even number', () => {
    assert.equal(isEvenNumber(1), false);
  });
  // Chai
  it('should return false if value not even number', () => {
    expect(isEvenNumber(1)).false;
  });

  it('should return false if value NaN', () => {
    assert.equal(isEvenNumber(NaN), false);
  });
  // Chai
  it('should return false if value NaN', () => {
    expect(isEvenNumber(NaN)).false;
  });

  it('should return false if value string', () => {
    assert.equal(isEvenNumber('1'), false);
  });
  // Chai
  it('should return false if value string', () => {
    expect(isEvenNumber('1')).false;
  });

  it('should return false for empty value', () => {
    assert.equal(isEvenNumber(''), false);
  });
  // Chai
  it('should return false for empty value', () => {
    expect(isEvenNumber('')).false;
  });

});