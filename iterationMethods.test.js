const {
  greaterThanTwentyFive,
  divisibleByFive,
  squaredNumbers,
  doubledNumbers,
  filteredAndSquared,
  filteredAndTripled,
  logger,
} = require("./iterationMethods.js");

describe("Array Manipulation Functions", () => {
  describe("Filtering Tasks", () => {
    it("should filter numbers greater than or equal to 25", () => {
      expect(greaterThanTwentyFive([10, 13, 20, 25, 38, 35, 40])).toEqual([
        25, 38, 35, 40,
      ]);
    });

    it("should filter numbers divisible by 5", () => {
      expect(divisibleByFive([10, 13, 20, 25, 38, 35, 40])).toEqual([
        10, 20, 25, 35, 40,
      ]);
    });
  });

  describe("Mapping Tasks", () => {
    it("should create an array of each number squared", () => {
      expect(squaredNumbers([10, 13, 20])).toEqual([100, 169, 400]);
    });

    it("should create an array of each number multiplied by 2", () => {
      expect(doubledNumbers([10, 13, 20])).toEqual([20, 26, 40]);
    });
  });

  describe("Combining Filtering and Mapping", () => {
    it("should filter numbers greater than or equal to 20 and square them", () => {
      expect(filteredAndSquared([10, 13, 20, 25, 38, 35, 40])).toEqual([
        400, 625, 1444, 1225, 1600,
      ]);
    });

    it("should filter numbers divisible by 5 and multiply each by 3", () => {
      expect(filteredAndTripled([10, 13, 20, 25, 38, 35, 40])).toEqual([
        30, 60, 75, 105, 120,
      ]);
    });
  });
});
