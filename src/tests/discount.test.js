const discount = require("./discount");

test("should apply discount correctly", () => {
  expect(discount(10000, 0.05)).toBe(500);
});
