import * as chai from 'chai';
var expect = chai.expect;
import drop from '../src/drop.js';

describe('Testing reduce.js', () => {

    it('Should drop elements from an array', () => {
        const result = drop([1,2,3],2)
        expect(result).to.deep.equal([3])
    })

    it('Should drop elements from an array using default amount 1', () => {
        const result = drop([1,2,3])
        expect(result).to.deep.equal([2,3])
    })

    it('Should drop all elements when the amount to drop is equal to array length', () => {
        const result = drop([1,2,3],3)
        expect(result).to.deep.equal([])
    })

    it('Should drop all elements when the amount to drop is larger tahn array length', () => {
        const result = drop([1,2,3],5)
        expect(result).to.deep.equal([])
    })

    it('Should not drop elements when amount to drop is 0', () => {
        const result = drop([1,2,3],0)
        expect(result).to.deep.equal([1,2,3])
    })

    it('Should handle if the amount to drop is negative', () => {
        const result = drop([1,2,3],-1)
        expect(result).to.deep.equal([1,2,3])
    })

    it('Should handle an empty array', () => {
        const result = drop([])
        expect(result).to.deep.equal([])
    })

    it('Should handle a null array', () => {
        const result = drop(null)
        expect(result).to.deep.equal([])
    })

    it('Should handle a null amount to drop', () => {
        const result = drop([1,2,3], null)
        expect(result).to.deep.equal([1,2,3])
    })

})