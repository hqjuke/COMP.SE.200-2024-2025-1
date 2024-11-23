import * as chai from 'chai';
var expect = chai.expect;
import toFinite from '../src/toFinite.js';

describe('Testing toFinite.js', () => {

    it('Should keep a finite number finite', () => {
        const result1 = toFinite(3.2)
        expect(result1).to.equal(3.2)

        const result2 = toFinite(52311335.1242)
        expect(result2).to.equal(52311335.1242)

        const result3 = toFinite(0)
        expect(result3).to.equal(0)

    })

    it('Should work for negative numbers', () => {
        const result = toFinite(-3.2)
        expect(result).to.equal(-3.2)

    })

    it('Should work for MIN and MAX values', () => {
        const resultMin = toFinite(Number.MIN_VALUE)
        expect(resultMin).to.equal(5e-324)

        const resultMax = toFinite(Number.MAX_VALUE)
        expect(resultMax).to.equal(1.7976931348623157e+308)

    })

    it('Should work for the negative MIN and MAX values', () => {
        const resultMin = toFinite(-Number.MIN_VALUE)
        expect(resultMin).to.equal(-5e-324)

        const resultMax = toFinite(-Number.MAX_VALUE)
        expect(resultMax).to.equal(-1.7976931348623157e+308)

    })

    it('Should work for numbers larger than MAX value', () => {
        const resultPosMax = toFinite(Number.MAX_VALUE + 1)
        expect(resultPosMax).to.equal(1.7976931348623157e+308)

    })

    it('Should work for infinity', () => {
        const result1 = toFinite(1/0)
        expect(result1).to.equal(1.7976931348623157e+308)

        const result2 = toFinite(-1/0)
        expect(result2).to.equal(-1.7976931348623157e+308)

    })

    it('Should work for string conversion', () => {
        const result = toFinite('3.2')
        expect(result).to.equal(3.2)

    })

    it('Should handle non numeric strings', () => {
        const result = toFinite('abc')
        expect(result).to.equal(0)

    })

    it('Should handle other object inputs', () => {
        const result1 = toFinite([])
        expect(result1).to.equal(0)

        const result2 = toFinite([1,2,3])
        expect(result2).to.equal(0)

        const result3 = toFinite({})
        expect(result3).to.equal(0)

    })

    it('Should handle boolean values', () => {
        const result1 = toFinite(true)
        expect(result1).to.equal(1)

        const result2 = toFinite(false)
        expect(result2).to.equal(0)
      });

    it('Should convert null, undefined and NaN input to result to 0', () => {
        const result1 = toFinite(null)
        expect(result1).to.equal(0)

        const result2 = toFinite(undefined)
        expect(result2).to.equal(0)

        const result3 = toFinite(NaN)
        expect(result3).to.equal(0)

    })

})