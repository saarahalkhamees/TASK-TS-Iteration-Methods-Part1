const {
  logger,
  toCelsius,
  hottestDays,
  logHottestDays,
} = require("./iterationMethods.js");

// 🌶️🌶️🌶️ Extra
/*
* Remove the "x" from "xdescribe" 👇🏼 
* to run the challenge tests 
*/
xdescribe("Extra Array and String Functions", () => {
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
