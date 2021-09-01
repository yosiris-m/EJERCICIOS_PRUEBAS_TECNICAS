/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
  const hour = s.substr(0, 2);
  const minutesAndSeconds = s.substring(2, 8);
  const meridiem = s.substring(8, 10);
  let militaryHour;

  if (meridiem === "AM") {
    if (hour === "12") {
      militaryHour = "00";
    } else {
      militaryHour = hour;
    }
  }

  if (meridiem === "PM") {
    if (hour === "12") {
      militaryHour = hour;
    } else {
      militaryHour = parseInt(hour) + 12;
    }
  }

  return `${militaryHour}${minutesAndSeconds}`;
}

//Test simple --------------------------------------------------------------->>>
let expectedResult = "00:10:20";
let result = timeConversion("12:10:20AM");

if (result !== expectedResult) {
  throw new Error(`result ${result} should be ${expectedResult}`);
}

expectedResult = "01:10:20";
result = timeConversion("01:10:20AM");

if (result !== expectedResult) {
  throw new Error(`result ${result} should be ${expectedResult}`);
}

expectedResult = "12:10:20";
result = timeConversion("12:10:20PM");

if (result !== expectedResult) {
  throw new Error(`result ${result} should be ${expectedResult}`);
}

expectedResult = "23:10:20";
result = timeConversion("11:10:20PM");

if (result !== expectedResult) {
  throw new Error(`result ${result} should be ${expectedResult}`);
}
