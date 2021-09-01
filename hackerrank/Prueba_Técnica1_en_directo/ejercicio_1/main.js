//Dado un string hacer que este se ponga al inverso-------------------------->>>>>>>>>>>>

//USANDO UN IF------------------------------------------>>>>>>>>>>>>>>>>>>>>>
function reverseString(text) {
  let newString = "";
  for (let i = text.length - 1; i >= 0; i--) {
    newString += text[i];
  }

  return newString;
}

//<-------------------------------------TEST SIMPLE---------------------------------->>>>>>>>>
let text = "abcdeghjkl";

const expectedResult = "lkjhgedcba";
const result = reverseString(text);

if (expectedResult !== result) {
  throw new Error(`The result ${result} should be ${expectedResult}`);
}

//<-----------------------------------USANDO METODOS---------------------------------------->
//.split Devuelve la matriz dividida,
// .reverse() El método devuelve la matriz invertida,
// .join está el string que queremos,
function reverseString(text) {
  return text.split("").reverse().join("");
}

//<------------------------------------TEST SIMPLE -------------------------------->>>>>>>>>
let text = "abcdeghjkl";

const expectedResult = "lkjhgedcba";
const result = reverseString(text);

if (expectedResult !== result) {
  throw new Error(`The result ${result} should be ${expectedResult}`);
}
