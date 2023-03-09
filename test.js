// show me an example of an anonymous function

// let names = ["Jeff", "Chelsey"];
// let newStuff = names.map((name) => {
//   return `Hi ${name}`;
// });
// console.log(newStuff);

// example of string interplation with backticks, no plus needed
// let friends = ["Chelsey", "Jeff"];
// console.log(`Hi my friends are named ${friends}!`);

// example of string interplation with pluses
// let greeting = "Hello " + "Jeff, " + "how are you doing?";
// console.log(greeting);

// show me an example of string concatentation using +=
// let greeting = "";
// greeting = greeting + "Hello";
// greeting += " Jeff";
// greeting += " Jeff, You're cool";
// console.log(greeting);

// example of if statement
//let song = "Gotta Jibboo";
// let song = "Tube";

// if (song == "Gotta Jibboo") {
//   console.log("Keep in drinking too");
// }

// if (song == "Tube") {
//   console.log("Asteroid crashed");
// }

// whats the difference between a regular function and an arrow function?
// function hello() {
//   console.log(this);
// }
// hello();

const yo = () => {
  console.log(this);
};
yo();

//the value of `this` changes

// create an object with properties and getter/setter methods that set and retrieve object properties
let myself = {
  name: "Chelsey",
  hairColor: "Brown",
  eyeColor: "Brown",
  age: 31,
  interests: ["Phish", "Hardcore Drugs"],
  hello: function () {
    console.log("hello");
  },
  setHairColor: function (color) {
    this.hairColor = color;
  },
  getHairColor: function () {
    return this.hairColor;
  },
};
