import * as chai from 'chai';
var expect = chai.expect;
import add from '../src/add.js';




describe('add', () => {

    // Basic addition
    it('should return the correct sum of two positive numbers', () => {
      expect(add(6, 4)).to.equal(10);  // 6 + 4 = 10
    });
  
    it('should return the correct sum of two negative numbers', () => {
      expect(add(-3, -7)).to.equal(-10);  // -3 + -7 = -10
    });
  
    it('should return the correct sum when adding a positive and a negative number', () => {
      expect(add(10, -5)).to.equal(5);  // 10 + (-5) = 5
      expect(add(-5, 10)).to.equal(5);  // -5 + 10 = 5
    });
  
    // Adding zero
    it('should return the same number when adding zero', () => {
      expect(add(0, 5)).to.equal(5);  // 0 + 5 = 5
      expect(add(5, 0)).to.equal(5);  // 5 + 0 = 5
      expect(add(0, 0)).to.equal(0);  // 0 + 0 = 0
    });
  
    // Addition involving large numbers
    it('should correctly add large numbers', () => {
      expect(add(1000000000, 1000000000)).to.equal(2000000000);  
    });
  
    // Addition with Infinity
    it('should handle addition with Infinity correctly', () => {
      expect(add(Infinity, 5)).to.equal(Infinity);  // Infinity + 5 = Infinity
      expect(add(5, Infinity)).to.equal(Infinity);  // 5 + Infinity = Infinity
      expect(add(-Infinity, 10)).to.equal(-Infinity);  // -Infinity + 10 = -Infinity
    });
  
    // Addition with NaN
    it('should return NaN when adding NaN', () => {
      expect(add(NaN, 5)).to.be.NaN();  // NaN + 5 = NaN
      expect(add(5, NaN)).to.be.NaN();  // 5 + NaN = NaN
      expect(add(NaN, NaN)).to.be.NaN();  // NaN + NaN = NaN
    });
  
    // Addition with non-numeric values
    it('should coerce non-numeric values to numbers', () => {
      expect(add('10', 5)).to.equal(15);  // '10' + 5 = 15 (string '10' coerced to number)
      expect(add(5, '5')).to.equal(10);   // 5 + '5' = 10 (string '5' coerced to number)
      expect(add('10', '5')).to.equal(15); // '10' + '5' = 15 (both strings coerced to numbers)
    });
  
    // Adding zero to negative number
    it('should return the correct sum when adding zero to a negative number', () => {
      expect(add(0, -3)).to.equal(-3);  // 0 + -3 = -3
      expect(add(-3, 0)).to.equal(-3);  // -3 + 0 = -3
    });
  
    // Adding very small decimal numbers
    it('should correctly add small decimal numbers', () => {
      expect(add(0.1, 0.2)).to.equalCloseTo(0.3, 5);  // 0.1 + 0.2 = 0.3 (with floating point precision tolerance)
      expect(add(0.0001, 0.0002)).to.equalCloseTo(0.0003, 5);  // Small decimals
    });
  
    // Adding large negative and large positive numbers
    it('should correctly add large negative and large positive numbers', () => {
      expect(add(-1000000000, 1000000000)).to.equal(0);  // Large positive and negative number sum
    });
  });