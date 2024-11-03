const {
  greaterThanTwentyFive,
  divisibleByFive,
  squaredNumbers,
  doubledNumbers,
  filteredAndSquared,
  filteredAndTripled,
  logger,
  toCelsius,
  hottestDays,
  logHottestDays,
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

  describe("logger Function", () => {
    it("logs every element of the array to the console", () => {
      const testArray = ["apple", "banana", "cherry"];

      const consoleSpy = jest.spyOn(console, "log");

      logger(testArray);

      expect(consoleSpy).toHaveBeenCalledTimes(testArray.length);

      testArray.forEach((item, index) => {
        expect(consoleSpy).toHaveBeenNthCalledWith(index + 1, item);
      });

      consoleSpy.mockRestore();
    });
  });
});

// 🌶️🌶️🌶️ Extra
describe("Extra Array and String Functions", () => {
  describe("toCelsius Function", () => {
    it("converts Fahrenheit to Celsius", () => {
      expect(toCelsius([32, 212])).toEqual([0, 100]);
    });
  });

  describe("hottestDays Function", () => {
    it("returns temperatures above a given threshold", () => {
      expect(hottestDays([90, 100, 110], 95)).toEqual([100, 110]);
    });
  });

  describe("logHottestDays Function", () => {
    it("logs temperatures above a threshold in Celsius", () => {
      const consoleSpy = jest.spyOn(console, "log");
      logHottestDays([90, 100, 110], 95);
      expect(consoleSpy).toHaveBeenCalledWith(37.77777777777778);
      expect(consoleSpy).toHaveBeenCalledWith(43.333333333333336);
      consoleSpy.mockRestore();
    });
  });
});
