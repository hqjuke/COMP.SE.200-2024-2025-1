import * as chai from 'chai';
var expect = chai.expect;
import reduce from '../src/reduce.js';

describe('Testing reduce.js', () => {
    it('Should reduce a simple array to a value', () => {
        const result = reduce([1, 2], (sum, n) => sum + n, 0)      

        expect(result).to.equal(3);

    })

    it('Should work without being given the accumalator', () => {
        const result = reduce([1, 2], (sum, n) => sum * n + 5)      

        expect(result).to.equal(7);

    })

    it('Should reduce an object to a different object', () => {
        const result = reduce({ 'a': 1, 'b': 2, 'c': 1 }, (result, value, key) => {
               (result[value] || (result[value] = [])).push(key)
               return result
            }, {})    

        expect(result).to.deep.equal({ '1': ['a', 'c'], '2': ['b'] });

    })

    it('Should handle an empty array', () => {
        const result = reduce([], (sum, n) => sum + n, 0)      

        expect(result).to.equal(0);

    })

    it('Should handle an empty object with an initial accumulator', () => {
        const result = reduce({}, (result, value, key) => {
               (result[value] || (result[value] = [])).push(key)
               return result
            }, {})    

        expect(result).to.deep.equal({});

    })

    it('Should handle a undefined array, undefined iteratee and no accumalator', () => {
        const result = reduce(undefined, undefined)      

        expect(result).to.equal(undefined);

    })

    it('Should pass the correct arguments to the iteratee for arrays', () => {
        const array = [10, 20, 30];
        const iteratee = (acc, value, index, collection) => {
          expect(collection).to.equal(array);
          expect(value).to.be.oneOf([10, 20, 30]);
          expect(index).to.be.oneOf([0, 1, 2]);
          return acc + value;
        };
        reduce(array, iteratee, 0);
    })
    
    it('Should pass the correct arguments to the iteratee for objects', () => {
        const obj = { a: 1, b: 2, c: 3 };
        const iteratee = (acc, value, key, collection) => {
          expect(collection).to.equal(obj);
          expect(value).to.be.oneOf([1, 2, 3]);
          expect(key).to.be.oneOf(['a', 'b', 'c']);
          return acc + value;
        };
        reduce(obj, iteratee, 0);
    })




})