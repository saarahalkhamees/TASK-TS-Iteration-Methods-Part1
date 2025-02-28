import { divisibleByFive, greaterThanTwentyFive } from "../filtering";

describe("Filtering Tasks", () => {
  describe("greaterThanTwentyFive", () => {
    it("should filter and return numbers greater than or equal to 25", () => {
      expect(greaterThanTwentyFive([10, 13, 20, 25, 38, 35, 40])).toEqual([
        25, 38, 35, 40,
      ]);
    });
  });

  describe("divisibleByFive", () => {
    it("should filter and return numbers divisible by 5", () => {
      expect(divisibleByFive([10, 13, 20, 25, 38, 35, 40])).toEqual([
        10, 20, 25, 35, 40,
      ]);
    });
  });
});
