//Dado un valor en un input decir si esta o no en el rango------------------------------->.

const inputNumber = document.getElementById("inputNumber");
const validationMsg = document.getElementById("validationMsg");

function makeValidator(min, max) {
  return (num) => {
    if (num > max) {
      validationMsg.style = "color: red;";
      return `greater than ${max}`;
    }

    if (num < min) {
      validationMsg.style = "color: red;";
      return `lower than ${min}`;
    }

    validationMsg.style = "color: green;";
    return `${num} between ${min} and ${max}`;
  };
}

const validator = makeValidator(1, 5);

function inputNumberOnChange(event) {
  const num = event.target.value;
  const msg = validator(num);

  validationMsg.innerText = msg;
}

inputNumber.addEventListener("change", inputNumberOnChange);
