import * as chai from 'chai';
var expect = chai.expect;
import toString from '../src/toString.js';
import isSymbol from '../src/isSymbol.js';
// lisaa jest tai korvaa

describe('Testing toString.js', () => {

  // Basic types: string, number, boolean, null, undefined
  it('Should return the string representation of a string', () => {
    expect(toString('hello')).to.equal('hello');
    expect(toString('')).to.equal('');
  });

  it('Should return the string representation of a number', () => {
    expect(toString(123)).to.equal('123');
    expect(toString(-123)).to.equal('-123');
    expect(toString(0)).to.equal('0');
    expect(toString(-0)).to.equal('-0');
  });

  it('Should return the string representation of a boolean', () => {
    expect(toString(true)).to.equal('true');
    expect(toString(false)).to.equal('false');
  });

  it('Should return an empty string for null', () => {
    expect(toString(null)).to.equal('');
  });

  it('Should return an empty string for undefined', () => {
    expect(toString(undefined)).to.equal('');
  });

  // Special cases: handling -0
  it('Should return "-0" when the value is -0', () => {
    expect(toString(-0)).to.equal('-0');
  });

  it('Should return "0" when the value is 0', () => {
    expect(toString(0)).to.equal('0');
  });

  // Arrays
  it('Should return a string representation of an array of numbers', () => {
    expect(toString([1, 2, 3])).to.equal('1,2,3');
  });

  it('Should return a string representation of an array of mixed types', () => {
    expect(toString([1, 'hello', true, null])).to.equal('1,hello,true,');
  });

  it('Should handle nested arrays correctly', () => {
    expect(toString([1, [2, 3], 4])).to.equal('1,2,3,4');
  });

  it('Should handle an empty array correctly', () => {
    expect(toString([])).to.equal('');
  });

  it('Should handle arrays with null or undefined elements correctly', () => {
    expect(toString([null, undefined])).to.equal(','); // Both should be treated as empty strings
  });

  // Symbols
  it('Should call toString() on symbols and return the result', () => {
    const symbol = Symbol('test');   
    const result = toString(symbol);

    expect(result).to.equal(symbol.toString());  // Result should match the symbol's string representation
  });

  // Other objects: handle non-array objects
  it('Should return the string representation of a plain object', () => {
    const obj = { key: 'value' };
    expect(toString(obj)).to.equal('[object Object]');
  });

  it('Should return the string representation of a Date object', () => {
    const date = new Date('2024-01-01');
    expect(toString(date)).to.equal(date.toString());  // Should match the Date's internal toString
  });

  // Other edge cases
  it('Should handle values that are already strings without unnecessary conversion', () => {
    const str = 'already a string';
    expect(toString(str)).to.equal(str);  // No extra processing should happen
  });

  it('Should handle the case where the value is a number-like object (e.g., a Number object)', () => {
    expect(toString(new Number(123))).to.equal('123');  // Should convert to '123'
    expect(toString(new Number('123'))).to.equal('123');  // Should convert to '123'
  });


});