import isObjectLike from '../src/isObjectLike.js';

describe('isObjectLike', () => {

  // Basic objects
  it('should return true for plain objects', () => {
    expect(isObjectLike({})).toBe(true);  // Plain object
    expect(isObjectLike({ a: 1 })).toBe(true);  // Object with properties
  });

  // Arrays (arrays are object-like)
  it('should return true for arrays', () => {
    expect(isObjectLike([1, 2, 3])).toBe(true);  // Array
    expect(isObjectLike([])).toBe(true);  // Empty array
  });

  // Special object types
  it('should return true for built-in objects like Date', () => {
    const date = new Date();
    expect(isObjectLike(date)).toBe(true);  // Date object
  });

  it('should return true for RegExp objects', () => {
    const regex = /abc/;
    expect(isObjectLike(regex)).toBe(true);  // Regular expression object
  });

  it('should return true for Map and Set objects', () => {
    const map = new Map();
    const set = new Set();
    expect(isObjectLike(map)).toBe(true);  // Map object
    expect(isObjectLike(set)).toBe(true);  // Set object
  });

  it('should return true for WeakMap and WeakSet objects', () => {
    const weakMap = new WeakMap();
    const weakSet = new WeakSet();
    expect(isObjectLike(weakMap)).toBe(true);  // WeakMap object
    expect(isObjectLike(weakSet)).toBe(true);  // WeakSet object
  });

  // Non-object-like values (should return false)
  it('should return false for null', () => {
    expect(isObjectLike(null)).toBe(false);  // null is not object-like
  });

  it('should return false for undefined', () => {
    expect(isObjectLike(undefined)).toBe(false);  // undefined is not object-like
  });

  it('should return false for primitive numbers', () => {
    expect(isObjectLike(42)).toBe(false);  // number is not object-like
    expect(isObjectLike(NaN)).toBe(false);  // NaN is not object-like
  });

  it('should return false for primitive strings', () => {
    expect(isObjectLike('hello')).toBe(false);  // string is not object-like
    expect(isObjectLike('')).toBe(false);  // empty string is not object-like
  });

  it('should return false for booleans', () => {
    expect(isObjectLike(true)).toBe(false);  // boolean is not object-like
    expect(isObjectLike(false)).toBe(false);  // boolean is not object-like
  });

  it('should return false for functions', () => {
    expect(isObjectLike(function() {})).toBe(false);  // function is not object-like
    expect(isObjectLike(() => {})).toBe(false);  // arrow function is not object-like
  });

  it('should return false for symbols', () => {
    expect(isObjectLike(Symbol('test'))).toBe(false);  // symbol is not object-like
  });

  it('should return false for objects created with Object.create(null)', () => {
    const obj = Object.create(null);
    expect(isObjectLike(obj)).toBe(true);  // Still an object-like value, even if it doesn't inherit from Object.prototype
  });

});