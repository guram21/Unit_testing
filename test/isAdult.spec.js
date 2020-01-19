const assert = require('assert');
const {expect} = require('chai');
const {isAdult} = require('../index');

describe('function isAdult', () => {

  it('should return true if value greater than or equal to 18', () => {
    assert.equal(isAdult(18), true);
  });
  // Chai
  it('should return true if value greater than or equal to 18', () => {
    expect(isAdult(18)).true;
  });

  it('should return false if value less than 18', () => {
    assert.equal(isAdult(17), false);
  });
  // Chai
  it('should return false if value less than 18', () => {
    expect(isAdult(17)).false;
  });

  it('should return false if value equal to 0', () => {
    assert.equal(isAdult(0), false);
  });
  // Chai
  it('should return false if value equal to 0', () => {
    expect(isAdult(0)).false;
  });

  it('should return false if value less than 0', () => {
    assert.equal(isAdult(-1), false);
  });
  // Chai
  it('should return false if value less than 0', () => {
    expect(isAdult(-1)).false;
  });

  it('should return false for empty value', () => {
    assert.equal(isAdult(''), false);
  });
  // Chai
  it('should return false for empty value', () => {
    expect(isAdult('')).false;
  });

});