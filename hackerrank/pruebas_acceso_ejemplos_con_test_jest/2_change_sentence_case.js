// cambiar las mayusculas y minusculas de la siguiente forma:
// la primera letra y la ultima de una palabra mayuscula y resto minuscula
//"Erase un pajaro llamado Tomas" -> "ErasE UN PajarO LlamadO TomaS"

function changesWords(text) {
  let words = text.split(" ");
  for (var i = 0; i < words.length; i++) {
    const word = words[i];
    words[i] =
      word.charAt(0).toUpperCase() +
      word.slice(1, word.length - 1).toLowerCase() +
      word.charAt(word.length - 1).toUpperCase();
  }

  return words.join(" ");
}

const result = changesWords("Erase un pajaro llamado Tomas");
const expectedResult = "ErasE UN PajarO LlamadO TomaS";

if (expectedResult !== result) {
  throw new Error(`the resul ${result} should be ${expectedResult}`);
}
