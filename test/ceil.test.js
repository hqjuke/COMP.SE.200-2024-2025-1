
import ceil from '../src/ceil.js';

describe('ceil', () => {

    // Basic rounding to the nearest integer (default precision is 0)
    it('should round up a positive number to the nearest integer', () => {
      expect(ceil(4.006)).toBe(5);  // Rounds up to 5
      expect(ceil(4.1)).toBe(5);    // Rounds up to 5
      expect(ceil(4.9)).toBe(5);    // Rounds up to 5
      expect(ceil(0.1)).toBe(1);    // Rounds up to 1
    });
  
    it('should round up a negative number to the nearest integer', () => {
      expect(ceil(-4.006)).toBe(-4); // Rounds up to -4
      expect(ceil(-4.9)).toBe(-4);   // Rounds up to -4
      expect(ceil(-0.1)).toBe(0);    // Rounds up to 0
    });
  
    // Rounding with a specified precision
    it('should round a number up to 2 decimal places', () => {
      expect(ceil(6.004, 2)).toBe(6.01);   // Rounds up to 6.01
      expect(ceil(6.001, 2)).toBe(6.01);   // Rounds up to 6.01
      expect(ceil(6.009, 2)).toBe(6.01);   // Rounds up to 6.01
      expect(ceil(6.01, 2)).toBe(6.01);    // Already rounded
    });
  
    it('should round a number up to 1 decimal place', () => {
      expect(ceil(6.004, 1)).toBe(6.1);    // Rounds up to 6.1
      expect(ceil(6.001, 1)).toBe(6.1);    // Rounds up to 6.1
      expect(ceil(6.09, 1)).toBe(6.1);     // Rounds up to 6.1
      expect(ceil(6.1, 1)).toBe(6.1);      // Already rounded
    });
  
    // Negative precision (rounding to tens, hundreds, etc.)
    it('should round up a number with negative precision (round to the nearest ten)', () => {
      expect(ceil(6040, -2)).toBe(6100);  // Rounds up to nearest hundred
      expect(ceil(6041, -2)).toBe(6100);  // Rounds up to nearest hundred
      expect(ceil(5999, -2)).toBe(6000);  // Rounds up to nearest hundred
    });
  
    it('should round up a number with negative precision (round to the nearest hundred)', () => {
      expect(ceil(1000, -3)).toBe(1000);   // Rounds up to nearest thousand (no change)
      expect(ceil(950, -3)).toBe(1000);    // Rounds up to nearest thousand
      expect(ceil(999, -3)).toBe(1000);    // Rounds up to nearest thousand
    });
  
    // Handling edge cases
    it('should return the number unchanged when already rounded up with no decimals', () => {
      expect(ceil(5, 0)).toBe(5);   // Already an integer
      expect(ceil(-5, 0)).toBe(-5); // Already an integer
    });
  
    it('should handle zero correctly', () => {
      expect(ceil(0)).toBe(0);      // Rounds 0 up to 0
      expect(ceil(0, 2)).toBe(0);   // Rounds 0 up to 0 with precision
    });
  
    it('should handle very small numbers correctly', () => {
      expect(ceil(0.0000001, 6)).toBe(0.000001); // Rounds to 6 decimals
      expect(ceil(0.00000005, 6)).toBe(0.000001); // Rounds to 6 decimals
    });
  
    it('should handle large numbers correctly', () => {
      expect(ceil(9999999, -3)).toBe(10000000); // Large number rounding
      expect(ceil(9999999, -4)).toBe(10000000); // Large number rounding
    });
  
    it('should handle negative large numbers correctly with negative precision', () => {
      expect(ceil(-9999999, -3)).toBe(-9000000);  // Negative large number rounding
      expect(ceil(-9999999, -4)).toBe(-10000000); // Negative large number rounding
    });
  
    // Handling NaN values
    it('should return NaN when passed NaN', () => {
      expect(ceil(NaN)).toBeNaN();  // NaN should return NaN
      expect(ceil(NaN, 2)).toBeNaN(); // NaN with precision should also return NaN
    });
  
    // Handling Infinity and -Infinity
    it('should return Infinity when passed Infinity', () => {
      expect(ceil(Infinity)).toBe(Infinity); // Infinity should return Infinity
      expect(ceil(-Infinity)).toBe(-Infinity); // -Infinity should return -Infinity
    });
  
  });