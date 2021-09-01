// crea una funcion que recibe una matriz de palabras y una palabra a buscar.
// devuelve un boolean que indica si la palabra se encuentra dentro de la matriz.

// matrix = [["casa", "pajaro"], ["terraza"], ["gato", "farola", "parque"]];
/*
search("parque", matrix) -> true

search("alcachofa", matrix) -> false

*/

// function search(word, matrix) {
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//       if (word === matrix[i][j]) {
//         return true;
//       }
//     }
//   }

//   return false;
// }

function search(word, matrix) {
  for (const row of matrix) {
    let includesResult = row.includes(word);
    if (includesResult === true) {
      return true;
    }
  }
  return false;
}

module.exports = search;

// function search(word, matrix) {
//   for (const row of matrix) {
//     if (row.includes(word)) {
//       return true;
//     }
//   }
//   return false;
// }

// matrix1 = [
//   ["perro", "gallina"],
//   ["conejo", "vaca"],
// ];

// let expectedResult = true;
// let result = search("gallina", matrix1);

// if (expectedResult !== result) {
//   throw new Error(`the result ${result} should be ${expectedResult}`);
// }

// expectedResult = false;
// result = search("palo", matrix1);

// if (expectedResult !== result) {
//   throw new Error(`the result ${result} should be ${expectedResult}`);
// }
