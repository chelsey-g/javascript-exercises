// https://jestjs.io/docs/using-matchers

let concatenateArray = require("./concatenateArray");

describe("Loops", () => {
  it("should create a string from an array of names", () => {
    const names = ["chelsey", "jeff", "laura", "zander", "tyler"];
    let output = "";
    names.forEach((name) => {
      output += `Hello ${name}\n`;
    });
    expect(output).toBe(
      "Hello chelsey\nHello jeff\nHello laura\nHello zander\nHello tyler\n"
    );
  });
});

describe("toUppercase", () => {
  it("should do stuff", () => {
    let result = "hello".toUpperCase();
    let expected = "HELLO";
    expect(result).toBe(expected);
  });
});

describe("concatenateArray function", () => {
  it("should concatenate an array of strings into a single string", () => {
    const arr = ["hello", "world", "!"];
    expect(concatenateArray(arr)).toBe("helloworld!");

    const arr2 = ["this", "is", "a", "test"];
    expect(concatenateArray(arr2)).toBe("thisisatest");

    const arr3 = [];
    expect(concatenateArray(arr3)).toBe("");
  });
});

// using a classic

// Class: Person
// hello(), goodbye()

// describe('Person', () => {
//     describe('hello()', () => {
//         it('it should return "hello"', () => {
//             let result = Person.hello();
//             let expected = 'hello';
//             expect(result).toBe(expected);
//         })
//     })
// })
