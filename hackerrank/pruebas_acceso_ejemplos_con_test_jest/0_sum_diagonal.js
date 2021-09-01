// Suma la diagonal de una matriz cuadrada
function matrixSum(matrix) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    sum += matrix[i][i];
  }
  return sum;
}
// const num = [
//   [8, 6, 5],
//   [4, 3, 2],
//   [1, 3, 2],
// ];

// const expectedResult = 13;

// const result = matrixSum(num);
// if (expectedResult !== result) {
//   throw new Error(`the result ${result} should be ${expectedResult}`);
// }

module.exports = matrixSum;
