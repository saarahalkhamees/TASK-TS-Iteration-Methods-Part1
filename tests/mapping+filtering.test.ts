import { filteredAndSquared, filteredAndTripled } from "../mapping+filtering";

describe("Combining Filtering and Mapping", () => {
  describe("filteredAndSquared", () => {
    it("should filter numbers greater than or equal to 20 and square them", () => {
      expect(filteredAndSquared([10, 13, 20, 25, 38, 35, 40])).toEqual([
        400, 625, 1444, 1225, 1600,
      ]);
    });
  });

  describe("filteredAndTripled", () => {
    it("should filter numbers divisible by 5 and multiply each by 3", () => {
      expect(filteredAndTripled([10, 13, 20, 25, 38, 35, 40])).toEqual([
        30, 60, 75, 105, 120,
      ]);
    });
  });
});
