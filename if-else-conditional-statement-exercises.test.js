let timeGreeting = require("./if-else-conditional-statement-exercises");

describe("if else statement", () => {
  it("should return Good morning! if the hour is between 6am - 12pm", () => {
    let result = timeGreeting(7);
    let expected = "Good morning!";
    expect(result).toBe(expected);
  });
  it("should return Good afternoon! if the hour is between 12pm - 6pm", () => {
    let result = timeGreeting(15);
    let expected = "Good afternoon!";
    expect(result).toBe(expected);
  });
  it("should return Good evening! if the hour is between 6pm - 6am", () => {
    let result = timeGreeting(20);
    let expected = "Good evening!";
    expect(result).toBe(expected);
  });
});
