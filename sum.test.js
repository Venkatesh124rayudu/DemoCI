import sum from './sum.js';
import mult from './mult.js';

describe('sum module', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    })
});

describe('mult module', () => {
    test('multiplies 2 * 3 to equal 6', () => {
        expect(mult(2, 3)).toBe(6);
    })
});