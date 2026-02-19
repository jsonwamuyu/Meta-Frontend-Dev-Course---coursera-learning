const addNumbers = require("./addNums");

const doubleNum = (num) => num * 2;
test("should add two numbers correctly", () => {
  expect(addNumbers(2, 3)).toBe(5);
});

test("should double a number", () => {
  expect(doubleNum(60)).toBe(120);
});
