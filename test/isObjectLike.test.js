import isObjectLike from '../src/isObjectLike.js';
import * as chai from 'chai';
var expect = chai.expect;

describe('Testing isObjectLike.js', () => {

  // Basic objects
  it('Should return true for plain objects', () => {
    expect(isObjectLike({})).to.equal(true);  // Plain object
    expect(isObjectLike({ a: 1 })).to.equal(true);  // Object with properties
  });

  // Arrays (arrays are object-like)
  it('Should return true for arrays', () => {
    expect(isObjectLike([1, 2, 3])).to.equal(true);  // Array
    expect(isObjectLike([])).to.equal(true);  // Empty array
  });

  // Special object types
  it('Should return true for built-in objects like Date', () => {
    const date = new Date();
    expect(isObjectLike(date)).to.equal(true);  // Date object
  });

  it('Should return true for RegExp objects', () => {
    const regex = /abc/;
    expect(isObjectLike(regex)).to.equal(true);  // Regular expression object
  });

  it('Should return true for Map and Set objects', () => {
    const map = new Map();
    const set = new Set();
    expect(isObjectLike(map)).to.equal(true);  // Map object
    expect(isObjectLike(set)).to.equal(true);  // Set object
  });

  it('Should return true for WeakMap and WeakSet objects', () => {
    const weakMap = new WeakMap();
    const weakSet = new WeakSet();
    expect(isObjectLike(weakMap)).to.equal(true);  // WeakMap object
    expect(isObjectLike(weakSet)).to.equal(true);  // WeakSet object
  });

  // Non-object-like values (should return false)
  it('Should return false for null', () => {
    expect(isObjectLike(null)).to.equal(false);  // null is not object-like
  });

  it('Should return false for undefined', () => {
    expect(isObjectLike(undefined)).to.equal(false);  // undefined is not object-like
  });

  it('Should return false for primitive numbers', () => {
    expect(isObjectLike(42)).to.equal(false);  // number is not object-like
    expect(isObjectLike(NaN)).to.equal(false);  // NaN is not object-like
  });

  it('Should return false for primitive strings', () => {
    expect(isObjectLike('hello')).to.equal(false);  // string is not object-like
    expect(isObjectLike('')).to.equal(false);  // empty string is not object-like
  });

  it('Should return false for booleans', () => {
    expect(isObjectLike(true)).to.equal(false);  // boolean is not object-like
    expect(isObjectLike(false)).to.equal(false);  // boolean is not object-like
  });

  it('Should return false for functions', () => {
    expect(isObjectLike(function() {})).to.equal(false);  // function is not object-like
    expect(isObjectLike(() => {})).to.equal(false);  // arrow function is not object-like
  });

  it('Should return false for symbols', () => {
    expect(isObjectLike(Symbol('test'))).to.equal(false);  // symbol is not object-like
  });

  it('Should return false for objects created with Object.create(null)', () => {
    const obj = Object.create(null);
    expect(isObjectLike(obj)).to.equal(true);  // Still an object-like value, even if it doesn't inherit from Object.prototype
  });

});