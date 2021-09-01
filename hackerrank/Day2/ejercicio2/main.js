/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

//<-----------------------como hacerlo con un For (i)------------------------------------------->
function diagonalDifference(arr) {
  let sumDiagonal1 = 0;
  let sumDiagonal2 = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i === j) {
        sumDiagonal1 += arr[i][j];
      }

      const inverseJ = arr.length - 1 - j;
      if (i === inverseJ) {
        sumDiagonal2 += arr[i][j];
      }
    }
  }

  return Math.abs(sumDiagonal1 - sumDiagonal2);
}

// <-----------Como se hace con un for-of (usando entries())----------------------------->>>

function diagonalDifference(arr) {
  let sumDiagonal1 = 0;
  let sumDiagonal2 = 0;

  for (const [i, row] of arr.entries()) {
    sumDiagonal1 += row[i];
    sumDiagonal2 += row[arr.length - 1 - i];
  }
  return Math.abs(sumDiagonal1 - sumDiagonal2);
}

/*
 *<------------------------------------CON UN FOR---------------------------------------->
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */
function diagonalDifference(arr) {
  let sumDiagonal1 = 0;
  let sumDiagonal2 = 0;

  for (let i = 0; i < arr.length; i++) {
    sumDiagonal1 += arr[i][i];
    sumDiagonal2 += arr[i][arr.length - 1 - i];
  }

  return Math.abs(sumDiagonal1 - sumDiagonal2);
}

//<---------------------------------------TEST SIMPLE-------------------------------------------->
const arr = [
  [10, 0, 5],
  [-5, 1, 20],
  [30, 7, 9],
];

const expectedResult = 16;

const result = diagonalDifference(arr);

if (expectedResult !== result) {
  throw new Error(`The result ${result} should be ${expectedResult}`);
}
