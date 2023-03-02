let creditBill = require("./string-concatenation-exercise");
// let { thingA } = require('./string')

describe("string concatenation", () => {
  it("should concatenate an array of strings into a single string", () => {
    let result = creditBill();
    let expected = "Your credit card bill is due on May 30th.";
    expect(result).toBe(expected);
  });
});
