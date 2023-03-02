let join = require("./src/join");
// import join from './src/join'

describe("join", () => {
  it("should join an array together with commas", () => {
    let result = join(["Jeff", "Chelsey"]);
    let expected = "Jeff, Chelsey";
    expect(result).toBe(expected);
  });
});
