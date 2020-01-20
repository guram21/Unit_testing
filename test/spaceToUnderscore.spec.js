const assert = require('assert');
const {expect} = require('chai');
const {spaceToUnderscore} = require('../index');

describe ('function spaceToUnderscore', () => {
  it('should function work correctly', ()=>{
    expect(noSpace('8 j 8 mBli\n\rB8g imjB8B8 jl B')).equal('8j8mBliB8gimjB8B8jlB');
  });
  it('should return correct result if there are multiple spaces', ()=>{
    expect(noSpace('8   8 Bi fk8h  B 8 BB8B')).equal('88Bifk8hB8BB8B');
  });
  it('should return correct result if there are spaces at the beginning and at the end', ()=>{
    expect(noSpace('  8aaaaa dddd r   ')).equal('8aaaaaddddr');
  });
  it('should return correct result if there are special characters /-$,./', ()=>{
    expect(noSpace('djk-13 - hf  3 $..  hy9 , y$ ')).equal('djk-13-hf3$..hy9,y$');
  });
  it('should return "wrong input" if input is a number', ()=>{
    expect(noSpace(5)).equal('wrong input');
  });
  it('should return "wrong input" if input is an array', ()=>{
    expect(noSpace([3, 4])).equal('wrong input');
  });
  it('should return "wrong input" if input is an object', ()=>{
    expect(noSpace({a: 1,})).equal('wrong input');
  });
  it('should return "wrong input" if input has no arguments', ()=>{
    expect(noSpace()).equal('wrong input');
  });
});