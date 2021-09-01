//crear una función que te de el valor maximo y minimo de un array usando MAX_VALUE y MIN_VALUE .
let array = [1, 2, 3, 4, Number.MAX_VALUE - 100];

function maxmin(array) {
  let arraySum = [];

  for (let i = 0; i < array.length; i++) {
    let sum = 0;

    for (let j = 0; j < array.length; j++) {
      if (i !== j) {
        sum += array[j];
        // console.log("*||||||||||||||| sum", sum);
      }
    }

    // console.log("****  Final sumas ", i + 1);
    arraySum.push(sum);
  }

  let max = Number.MIN_VALUE; //0;
  let min = Number.MAX_VALUE;
  for (const num of arraySum) {
    // if (num > max) {
    //   max = num;
    // }

    // if (num < min) {
    //   min = num;
    // }

    max = Math.max(max, num);
    min = Math.min(min, num);
  }

  console.log(`${min} ${max}`);
  console.log(max.toLocaleString("fullwide", { useGrouping: false }));
}

maxmin(array);
