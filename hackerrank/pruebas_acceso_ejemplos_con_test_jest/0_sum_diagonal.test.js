const { expect } = require("@jest/globals");
const matrixSum = require("./0_sum_diagonal");

test("diagonal sum", () => {
  const matrix = [
    [8, 6, 5],
    [4, 3, 2],
    [1, 3, 2],
  ];

  expect(matrixSum(matrix)).toEqual(13);
});
