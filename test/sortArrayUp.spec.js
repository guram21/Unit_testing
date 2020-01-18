const assert = require('assert');
const {expect} = require('chai');
const {sortArrayUp} = require('../index');

describe('function sortArrayUp', () => {

  it('should return array sorted in ascending order', () => {
    assert.deepEqual(sortArrayUp([4, 3, 2, 1, 0]), [0, 1, 2, 3, 4]);
  });
  // Chai
  it('should return array sorted in ascending order', () => {
    expect(sortArrayUp([4, 3, 2, 1, 0])).deep.eq([0, 1, 2, 3, 4]);
  });

  it('should return empty array if array is empty', () => {
    assert.deepEqual(sortArrayUp([]), []);
  });
  // Chai
  it('should return empty array if array is empty', () => {
    expect(sortArrayUp([])).deep.eq([]);
  });

});