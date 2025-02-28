import { doubledNumbers, squaredNumbers } from "../mapping";

describe("Mapping Tasks", () => {
  describe("squaredNumbers", () => {
    it("should return an array of each number squared", () => {
      expect(squaredNumbers([10, 13, 20])).toEqual([100, 169, 400]);
    });
  });

  describe("doubledNumbers", () => {
    it("should return an array of each number multiplied by 2", () => {
      expect(doubledNumbers([10, 13, 20])).toEqual([20, 26, 40]);
    });
  });
});
