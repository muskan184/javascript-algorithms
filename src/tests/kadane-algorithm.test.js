const kadaneAlgorithm = require('C:/Users/Muskan/Documents/javascript-algorithms/src/algorithms/kadane-algorithm.js');

describe("Kadane's Algorithm", () => {
  it('should return the maximum subarray sum', () => {
    const result = kadaneAlgorithm([1, -2, 3, -1, 2, 1, -5, 4]);
    console.log(result);
    expect(kadaneAlgorithm([1, -2, 3, -1, 2, 1, -5, 4])).toBe(5);
    expect(kadaneAlgorithm([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
    expect(kadaneAlgorithm([1, 2, 3, 4, 5])).toBe(15);
    expect(kadaneAlgorithm([-1, -2, -3, -4])).toBe(0);
  });
});
