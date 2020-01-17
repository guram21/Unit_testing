const assert = require('assert');
const {expect} = require('chai');
const {isAdult} = require('../index');

describe('function isAdult', () => {

  it('should return true if age is 18 and older', () => {
    assert.deepEqual(isAdult(18), true);
  });
  // Chai
  it('should return true if age is 18 and older', () => {
    expect(isAdult(18)).true;
  });

  it('should return false if age is under 18', () => {
    assert.notEqual(isAdult(17), true);
  });
  // Chai
  it('shhould return false if age is under 18', () => {
    expect(isAdult(17)).false;
  });

  it('should return `undefined` if age is equal to 0', () => {
    assert.equal(isAdult(0), undefined);
  });
  // Chai
  it('should return `undefined` if age is equal to 0', () => {
    expect(isAdult(0)).equal(undefined);
  });

  it('should return `undefined` if age is below 0', () => {
    assert.equal(isAdult(-1), undefined);
  });
  // Chai
  it('should return `undefined` if age is below 0', () => {
    expect(isAdult(-1)).equal(undefined);
  });
});