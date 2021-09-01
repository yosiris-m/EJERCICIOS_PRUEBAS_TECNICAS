//Dado un array  buscar el número que no este repetido.

//<----------------------------------Con un for(i)------------------------------------->
function lonelyinteger(a) {
  let result;
  for (let i = 0; i < a.length; i++) {
    let number = a[i];
    let found = false;
    for (let j = 0; j < a.length; j++) {
      if (j === i) {
        continue;
      }

      if (number === a[j]) {
        found = true;
        break;
      }
    }

    if (!found) {
      result = number;
      break;
    }
  }
  return result;
}
//<----------------------------------Con metodos----------------------------------------------->>>>>>>>>>>>
function lonelyinteger(a) {
  return a.find((number, i) => {
    const found = a.find((n, j) => j !== i && n === number);
    return !found;
  });
}

//<------------------------       ---------con for(of)----------------------------------------->
function lonelyinteger(a) {
  const numberCounter = {};

  for (const n of a) {
    if (numberCounter[n]) {
      numberCounter[n]++;
    } else {
      numberCounter[n] = 1;
    }
  }

  for (const n of Object.keys(numberCounter)) {
    if (numberCounter[n] === 1) {
      return Number(n);
    }
  }
}
//<---------------------------------------Test simple --------------------------------------->>>
const numbers = [2, 5, 2, 3, 5];

const expectedResult = 3;

const result = lonelyinteger(numbers);

if (result !== expectedResult) {
  throw new Error(`the result ${result} should be ${expectedResult}`);
}
