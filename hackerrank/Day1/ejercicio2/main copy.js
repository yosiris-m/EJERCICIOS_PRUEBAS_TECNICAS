
//crear una función que te de el valor maximo y minimo de un array.
function maxmin() {
  let array = [1, 2, 3, 4, 5];
  let arraySum = [];

  for (let i = 0; i < array.length; i++) {
    console.log("**************** bucle padre vuelta ", i + 1);
    let sum = 0;

    for (let j = 0; j < array.length; j++) {
      console.log("    ---------- bucle hijo vuelta ", j + 1);
      console.log("       array[j] -> ", array[j]);
      sum += array[j];
      console.log("       sum -> ", sum);
    }

    console.log("****  Final sumas ", i + 1);
    arraySum.push(sum);
  }
}

maxmin();
