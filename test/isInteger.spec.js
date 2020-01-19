const assert = require('assert');
const {expect} = require('chai');
const {isInteger} = require('../index');

describe('function isInteger', () => {

  it('should return true for integer number', () => {
    assert.equal(isInteger(1), true);
  });
  // Chai
  it('should return true for integer number', () => {
    expect(isInteger(1)).true;
  });

  it('should return false for not integer number', () => {
    assert.equal(isInteger(0.1), false);
  });
  // Chai
  it('should return false for not integer number', () => {
    expect(isInteger(0.1)).false;
  });

  it('should return false for NaN value', () => {
    assert.equal(isInteger(NaN), false);
  });
  // Chai
  it('should return false for NaN value', () => {
    expect(isInteger(NaN)).false;
  });

  it('should return false for string value', () => {
    assert.equal(isInteger('1'), false);
  });
  // Chai
  it('should return false for string value', () => {
    expect(isInteger('1')).false;
  });

  it('should return false for empty value', () => {
    assert.equal(isInteger(''), false);
  });
  // Chai
  it('should return false for empty value', () => {
    expect(isInteger('')).false;
  });

});