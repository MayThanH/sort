import { sort } from "../sort";

describe("sort function", () => {
  it("should merge sorted arrays and return sorted result", () => {
    const collection1 = [6, 5, 4, 3, 2, 1];
    const collection2 = [0, 1, 2, 3, 4];
    const collection3 = [0, 1, 2, 3, 4, 5, 6];

    const result = sort(collection1, collection2, collection3);
    expect(result).toEqual([
      6, 6, 5, 5, 4, 4, 4, 3, 3, 3, 2, 2, 2, 1, 1, 1, 0, 0,
    ]);
  });
});
