const { expect } = require("@jest/globals");
const search = require("./1_find_a_word");

test("find an existing word", () => {
  const matrix = [
    ["perro", "gallina"],
    ["conejo", "vaca"],
  ];

  expect(search("gallina", matrix)).toBeTruthy();
});

test("find a non-existing word", () => {
  const matrix = [
    ["perro", "gallina"],
    ["conejo", "vaca"],
  ];

  expect(search("palo", matrix)).toBeFalsy();
});
