import * as chai from 'chai';
var expect = chai.expect;
import filter from '../src/filter.js';

describe('Testing filter.js', () => {
    it('Should filter a simple array', () => {

        const testData = [1, 2, 3]
        const result = filter(testData, (value) => value === 1);

        expect(result).to.deep.equal([1]);
    })

    it('Should filter a more complex array', () => {

        const users = [
            { 'user': 'barney',  'active': true },
            { 'user': 'fred',    'active': false },
            { 'user': 'bob',     'active': false },
            { 'user': 'jill',    'active': false },
            { 'user': 'gregory',  'active': true }
          ]
        const result = filter(users, ({ active }) => active);

        expect(result).to.deep.equal([
            {'user': 'barney', 'active': true},
            {'user': 'gregory', 'active': true}
        ]);
    })

    it('Should return an empty array when no element fulfils the predicate', () => {

        const testData = [1, 2, 3]
        const result = filter(testData, (value) => value === 4);

        expect(result).to.deep.equal([]);
    })

    it('Should handle an empty array', () => {

        const testData = []
        const result = filter(testData, (value) => value === 1);

        expect(result).to.deep.equal([]);
    })

    it('Should handle a null or undefined array', () => {

        const result1 = filter(null, (value) => value === 1);
        const result2 = filter(undefined, (value) => value === 1);

        expect(result1).to.deep.equal([]);
        expect(result2).to.deep.equal([]);
    })

    // not sure about this test case even though it fails, I'm not sure if this could
    // be used like this, but I'll keep it here for now.
    it('Should handle a null predicate', () => {

        const testData = [1, 2, 3]
        const result = filter(testData, null);

        expect(result).to.deep.equal([]);
    })

    it('Should send value, index and array to predicate', () => {
        const testData = [1, 2, 3]

        const predicate = (value, index, array) => {
            expect(value).to.be.oneOf([1,2,3])
            expect(index).to.be.oneOf([0,1,2])
            expect(array).to.deep.equal([1,2,3])

            return value === 1

        }

        const result = filter(testData, predicate);

        expect(result).to.deep.equal([1]);
    })

    it('Should be able to filter by index', () => {

        const testData = [1, 2, 3]
        const result = filter(testData, (value, index) => index % 2 === 0);

        expect(result).to.deep.equal([1,3]);
    })

    it('Should be able to filter by value and index', () => {

        const testData = [1, 2, 1, 1]
        const result = filter(testData, (value, index) => value === 1 && index % 2 === 0);

        expect(result).to.deep.equal([1,1]);
    })

})