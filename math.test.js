const { mean, median, mode } = require("./math");

describe("mean function", () => {
  let data1;
  let data2;

  beforeEach(() => {
    data1 = [1, 2, 3, 4, 5];
    data2 = [6, 2, 2, 2, 3, 3, 3, 3, 3, 3];
  });

  test("should find the avg of given nums", () => {
    expect(mean(...data1)).toEqual(3);
    expect(mean(...data2)).toEqual(3);
  });
});

describe("median function", () => {
  let data1;
  let data2;

  beforeEach(() => {
    data1 = [1, 2, 3, 4, 5];
    data2 = [6, 2, 2, 2, 3, 3, 3, 3, 3, 3];
  });

  test("should find the median of given nums", () => {
    expect(median(...data1)).toEqual(3);
    expect(median(...data2)).toEqual(4.5);
  });
});

describe("mode function", () => {
  let data1;
  let data2;

  beforeEach(() => {
    data1 = [1, 2, 3, 4, 5, 3];
    data2 = [6, 2, 2, 2, 3, 3, 3, 3, 3, 3];
  });

  test("should return the highest frequency key", () => {
    expect(mode(...data1)).toEqual("3");
    expect(mode(...data2)).toEqual("3");
  });
});
