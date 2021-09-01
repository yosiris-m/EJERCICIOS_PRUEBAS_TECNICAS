//optener el resto de un número entero.
function median(arr) {
  arr.sort((a, b) => a - b);
  const medianIndex = Math.floor(arr.length / 2);
  return arr[medianIndex];
}
const expectedMedian = 8;
//<---------Test simple -opcionales-------------------------------------------->>>
let result = median([8, 5, 9]);

if (result !== expectedMedian) {
  throw new Error(`the result ${result} should be ${expectedMedian}`);
}
