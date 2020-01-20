const assert = require('assert');
const {expect} = require('chai');
const {spaceToUnderscore} = require('../index');

describe('function spaceToUnderscore', () => {

  it('should function work correctly', () => {
    assert.equal(spaceToUnderscore('file name'), 'file_name');
  });
  // Chai
  it('should function work correctly', () => {
    expect(spaceToUnderscore('file name')).equal('file_name');
  });

  it('should return false if value not string', () => {
    expect(spaceToUnderscore(1)).equal(false);
  });
  // Chai
  it('should return false if value not string', () => {
    expect(spaceToUnderscore(1)).equal(false);
  });

  it('should return false for empty value', () => {
    expect(spaceToUnderscore('')).equal(false);
  });
  // Chai
  it('should return false for empty value', () => {
    expect(spaceToUnderscore('')).equal(false);
  });
});