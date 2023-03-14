// // https://www.youtube.com/watch?v=8L2QwmnPAHs

// function noop() {}

// function logRandom(number) {
//   return Math.random(number);
// }

// // console.log(logRandom());

// function getLength(word) {
//   return word.length;
// }

// // console.log(getLength("phish"));

// function multiply(value1, value2) {
//   return value1 * value2;
// }

// // console.log(multiply(5, 4));

// function getLengthAndMultiply() {
//   return getLength("hello") + multiply(4, 6);
// }

// console.log(getLengthAndMultiply());

// function doMath(num) {
//   num = Number(num);
//   if (num) {
//     let newNumber = (num + 100) / 3;
//     return newNumber;
//   } else {
//     return false;
//   }
// }

// let customNumber = doMath("Caleb");

// console.log(customNumber);

// function filterMovies(movies, keyword) {
//   return movies.filter((title) => title.includes(keyword));
// }

// let res = filterMovies(
//   ["The Amazing Spiderman", "The Notebook", "Armageddon", "Titanic"],
//   "The"
// );
// console.log(res);
/**
 
['The Amazing Spiderman', 'The Notebook']

 * 
 */

// function combineShit(person, job) {
//   return {
//     name: person.name,
//     title: job.title,
//   };
//   //   return { ...person, ...job };
// }

// let person = {
//   name: "Chelsey",
// };

// let job = {
//   title: "Web Developer",
// };

// let res = combineShit(person, job);
// console.log(res);
/**

{
    name: 'Chelsey',
    title: 'Web Developer'
}

 */

// function lakesAcronym(lakeNames) {
//   let acronymResult = lakeNames.map((name) => {
//     return name[0];
//   });
//   return acronymResult.join("");
// }

// let res = lakesAcronym(["Superior", "Michigan", "Huron", "Eerie", "Ontario"]);
// console.log(res);
/**

"SMHEO"

 */

// function greeter(names, greeting) {
//   return names.map((name) => {
//     return `${greeting} ${name}`;
//   });
// }

// let res = greeter(["Chelsey", "Laura", "Jeff"], "Hello");
// console.log(res);
/**

['Hello Chelsey', 'Hello Laura', 'Hello Jeff']

 */

// function makeWhales(array, string) {
//   //   let arrayString = array[0] + ", " + array[1];
//   //   return arrayString + ", " + string;
//   return array.concat(string).join(", ");
// }

// let res = makeWhales(["Blue Whale", "Sperm Whale"], "Beluga Whale");
// console.log(res);
/**
 
'Blue Whale, Sperm Whale, Beluga Whale'

 */

// function censor(term, keyword) {

//   if (term.filter((name) => name.includes(keyword))) {
//     return term.replace(keyword, "*");
//   } else {
//     return 'No keyword found';
//   }
// }

// let res = censor(
//   ["Fucking twat", "Stupid bitch", "Fucking bitch"],
//   ["fuck", "bitch"]
// );
// console.log(res);
// /**

// ['****ing twat', 'Stupid *****', '****ing *****']

//  *
//  */

// const items = [
//   { name: "Bike", price: 100 },
//   { name: "TV", price: 200 },
//   { name: "Album", price: 10 },
//   { name: "Book", price: 5 },
//   { name: "Phone", price: 500 },
//   { name: "Computer", price: 1000 },
//   { name: "Keyboard", price: 25 },
// ];

// const foundItem = items.find((item) => {
//   return item.name === "book";
// });

// console.log(foundItem);

// function square(number) {
//   return number * number;
// }

// let number = square(2);
// console.log(number); som

function uppercaseFirstLetter(string) {
  let str = string.toLowerCase().split(" ");
  let newWord = str.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return newWord.join(" ");
}

let res1 = uppercaseFirstLetter("hello world");
console.log(res1);

let res2 = uppercaseFirstLetter("javascript is awesome");
console.log(res2);
