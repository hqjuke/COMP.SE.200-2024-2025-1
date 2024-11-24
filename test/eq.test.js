import * as chai from 'chai';
var expect = chai.expect;
import eq from '../src/eq.js';

describe('Testing eq.js', () => {

  // Basic primitive comparisons
  it('Should return true when comparing the same primitive values', () => {
    expect(eq(1, 1)).to.equal(true);      // Same number
    expect(eq('test', 'test')).to.equal(true); // Same string
    expect(eq(true, true)).to.equal(true);  // Same boolean
    expect(eq(undefined, undefined)).to.equal(true);  // Same undefined
    expect(eq(null, null)).to.equal(true);  // Same null
  });

  // Different primitive values should return false
  it('Should return false when comparing different primitive values', () => {
    expect(eq(1, 2)).to.equal(false);      // Different numbers
    expect(eq('test', 'Test')).to.equal(false);  // Different strings (case-sensitive)
    expect(eq(true, false)).to.equal(false);  // Different booleans
    expect(eq(1, '1')).to.equal(false);    // Different types
  });

  // Comparing objects (object equality by reference)
  it('Should return true when comparing the same object reference', () => {
    const obj = { a: 1 };
    expect(eq(obj, obj)).to.equal(true);  // Same reference
  });

  it('Should return false when comparing different object references with same values', () => {
    const obj1 = { a: 1 };
    const obj2 = { a: 1 };
    expect(eq(obj1, obj2)).to.equal(false);  // Different references but same values
  });

  // Comparing special object types (e.g., `Object` wrapper)
  it('Should return false when comparing primitive and object wrapper types', () => {
    expect(eq('a', Object('a'))).to.equal(false);  // String vs String object wrapper
  });

  // Handling NaN comparison
  it('Should return true when comparing NaN with NaN', () => {
    expect(eq(NaN, NaN)).to.equal(true);  // NaN == NaN (special case)
  });

  // Comparing objects with different properties
  it('Should return false when comparing objects with different properties', () => {
    const obj1 = { a: 1 };
    const obj2 = { b: 1 };
    expect(eq(obj1, obj2)).to.equal(false);  // Different properties
  });

  // Comparisons with undefined and null
  it('Should return true when comparing undefined with undefined', () => {
    expect(eq(undefined, undefined)).to.equal(true);
  });

  it('Should return false when comparing undefined with null', () => {
    expect(eq(undefined, null)).to.equal(false);
  });

  // Edge case with NaN (NaN is not equal to itself, but NaN === NaN returns true in this function)
  it('Should return true when comparing NaN to itself', () => {
    expect(eq(NaN, NaN)).to.equal(true);  // NaN == NaN (special case in SameValueZero)
  });

  // Comparing functions (functions are always different by reference)
  it('Should return false when comparing different functions', () => {
    const fn1 = () => {};
    const fn2 = () => {};
    expect(eq(fn1, fn2)).to.equal(false);  // Different function references
  });

});