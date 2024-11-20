import * as chai from 'chai';
var expect = chai.expect;
import toString from '../src/toString.js';
import isSymbol from '../src/isSymbol.js';
// lisaa jest tai korvaa

describe('toString', () => {

  // Basic types: string, number, boolean, null, undefined
  it('should return the string representation of a string', () => {
    expect(toString('hello')).to.equal('hello');
    expect(toString('')).to.equal('');
  });

  it('should return the string representation of a number', () => {
    expect(toString(123)).to.equal('123');
    expect(toString(-123)).to.equal('-123');
    expect(toString(0)).to.equal('0');
    expect(toString(-0)).to.equal('-0');
  });

  it('should return the string representation of a boolean', () => {
    expect(toString(true)).to.equal('true');
    expect(toString(false)).to.equal('false');
  });

  it('should return an empty string for null', () => {
    expect(toString(null)).to.equal('');
  });

  it('should return an empty string for undefined', () => {
    expect(toString(undefined)).to.equal('');
  });

  // Special cases: handling -0
  it('should return "-0" when the value is -0', () => {
    expect(toString(-0)).to.equal('-0');
  });

  it('should return "0" when the value is 0', () => {
    expect(toString(0)).to.equal('0');
  });

  // Arrays
  it('should return a string representation of an array of numbers', () => {
    expect(toString([1, 2, 3])).to.equal('1,2,3');
  });

  it('should return a string representation of an array of mixed types', () => {
    expect(toString([1, 'hello', true, null])).to.equal('1,hello,true,');
  });

  it('should handle nested arrays correctly', () => {
    expect(toString([1, [2, 3], 4])).to.equal('1,2,3,4');
  });

  it('should handle an empty array correctly', () => {
    expect(toString([])).to.equal('');
  });

  it('should handle arrays with null or undefined elements correctly', () => {
    expect(toString([null, undefined])).to.equal(','); // Both should be treated as empty strings
  });

  // Symbols
  it('should call toString() on symbols and return the result', () => {
    const symbol = Symbol('test');   
    const result = toString(symbol);

    expect(result).toBe(symbol.toString());  // Result should match the symbol's string representation
  });

  // Other objects: handle non-array objects
  it('should return the string representation of a plain object', () => {
    const obj = { key: 'value' };
    expect(toString(obj)).to.equal('[object Object]');
  });

  it('should return the string representation of a Date object', () => {
    const date = new Date('2024-01-01');
    expect(toString(date)).to.equal(date.toString());  // Should match the Date's internal toString
  });

  // Other edge cases
  it('should handle values that are already strings without unnecessary conversion', () => {
    const str = 'already a string';
    expect(toString(str)).to.equal(str);  // No extra processing should happen
  });

  it('should handle the case where the value is a number-like object (e.g., a Number object)', () => {
    expect(toString(new Number(123))).to.equal('123');  // Should convert to '123'
    expect(toString(new Number('123'))).to.equal('123');  // Should convert to '123'
  });

  // Invalid or unexpected inputs
  it('should return the string "undefined" for undefined objects', () => {
    expect(toString(undefined)).to.equal('');
  });

});