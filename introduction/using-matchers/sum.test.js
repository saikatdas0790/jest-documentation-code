const sum = require("./sum");

describe("getting started", () => {
  it("adds 1 + 2 to equal to 3", () => {
    expect.assertions(1);
    expect(sum(1, 2)).toBe(3);
  });
});
