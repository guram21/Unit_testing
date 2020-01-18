const assert = require('assert');
const {expect} = require('chai');
const {sortArrayDown} = require('../index');

describe('function sortArrayDown', () => {

  it('should return array sorted in descending order', () => {
    assert.deepEqual(sortArrayDown([0, 1, 2, 3, 4]), [4, 3, 2, 1, 0]);
  });
  // Chai
  it('should return array sorted in descending order', () => {
    expect(sortArrayDown([0, 1, 2, 3, 4])).deep.eq([4, 3, 2, 1, 0]);
  });

  it('should return empty array if array is empty', () => {
    assert.deepEqual(sortArrayDown([]), []);
  });
  // Chai
  it('should return empty array if array is empty', () => {
    expect(sortArrayDown([])).deep.eq([]);
  });

});