// function greeting(name) {
//     return 'Hi ' + name;
// }

// greeting('Chelsey');

// function classnameGenerator(className) {
//   return [className + " 101", className + " 201", className + " 301"];
// }

// function classnameGenerator(className) {
//     return [
//         `${className} 101`,
//         `${className} 201`,
//         `${className} 301`,
//     ]
// }

// function classnameGenerator(className) {
//     let result = [];
//     [101,201,301].forEach(num => {
//         result.push(`${className} ${num}`);
//     });
//     return result;
// }

// function classnameGenerator(className) {
//   return [101, 201, 301].map((num) => `${className} ${num}`);
// }

// function classnameGenerator(className) {
//   let classNumbers = ["101", "201", "301"];
//   let result = [];
//   for (i = 0; i < classNumbers.length; i++) {
//     let classResult = className + " " + classNumbers[i];
//     result.push(classResult);
//   }
//   return result;
// }

// let result1 = classnameGenerator("Science");
// console.log(result1);
/**
 * ['Science 101', 'Science 201', 'Science 301']
 */

// let result2 = classnameGenerator("Geology");
// console.log(result2);
/**
 * ['Geology 101', 'Geology 201', 'Geology 301']
 */

// function addAmountToArray(array, number) {
//   return array.map((num) => num + number);
// }

// function addAmountToArray(array, number) {
//   return array.map((num) => {
//     console.log("dlplerer");
//     return num + number;
//   });
// }

// let result = addAmountToArray([1, 2, 3], 10);
// console.log(result);
/**

[11, 12, 13]

 */

// function changeAge(person, age) {
//   person.age = age;
//   return person;
// }

// let person = {
//   name: "Chelsey",
//   age: 30,
//   town: "Killingworth",
// };

// let res = changeAge(person, 37);
// console.log(res);
/**

{
    name: 'Chelsey',
    age: 31,
    town: 'Killingworth'
}

 */

// examples done 3/8/23

// let person = {
//   name: "Chelsey",
//   hair: "brown",
//   eye: "blue",
// };

// function changeHairAndEyeColor(person, hair, eye) {
//   person.hair = hair;
//   person.eye = eye;
//   return person;
// }

// let res = changeHairAndEyeColor(person, "green", "black");
// console.log(res);

// function poolNameGenerator(number) {
//   poolNumbers = [3, 8, 9, 10];
//   result = [];

//   for (i = 0; i < poolNumbers.length; i++) {
//     let poolResult = poolNumbers[i] + " " + number;
//     result.push(poolResult);
//   }
//   return result;
// }

// let res = poolNameGenerator("Ball");
// console.log(res);

// function greeting(name, age) {
//   return "Hello," + name + ". You are " + age + "years old.";
// }

// let res = greeting("chelsey", 30);
// console.log(res);

// function addAmountToArray(array, number) {
//   return array.map((num) => {
//     console.log("dlplerer");
//     return num + number;
//   });
// }

// let result = addAmountToArray([1, 2, 3], 10);
// console.log(result);
/**

[11, 12, 13]

 */

// function addAmountToArray(array, number) {
//   return array.map((num) => {
//     return num + number;
//   });
// }

// let result = addAmountToArray([1, 2, 3], 10);
// console.log(result);

// function addAmountToArray(array, number) {
//   return array.map((num) => {
//     return num + number;
//   });
// }
// let result = addAmountToArray([1, 2, 3], 10);
// console.log(result);

// function addAmountToArray(array, number) {
//   return array.map((num) => {
//     return num + number;
//   });
// }
// let result = addAmountToArray([1, 2, 3], 10);
// console.log(result);

// let person = {
//   name: "chelsey",
//   age: 30,
//   hair: "black",
//   eyes: "blue",
// };

// function changeAgeAndHair(person, age, hair) {
//   person.age = age;
//   person.hair = hair;
//   return person;
// }

// let res = changeAgeAndHair(person, "brown", "green");
// console.log(res);

// function makeColoredAnimals(color) {
//   return ["Rabbit", "Deer", "Cat"].map((animal) => `${color} ${animal}`);
// }

// let res = makeColoredAnimals("Red");
// console.log(res);
/**
 
['Red Rabbit', 'Red Deer', 'Red Cat']

 */

// function addNumbers(array, number) {
//   return array.map((num) => {
//     return num + number;
//   });
// }

// let res = addNumbers([4, 5, 6], 11);
// console.log(res);
/**

[15,16,17]

 */

// function multiplyNumbers(num1, num2, num3) {
//   return num1 * num2 * num3;
// }

// let res = multiplyNumbers(23, 45, 21);
// console.log(res);

/**

21735

 */

// function fancifyWord(word, key) {
//   let WordResult = word.split("").map((letter) => {
//     return letter.concat(key);
//   });
//   let res = WordResult.join("");
//   return res.slice(0, res.length - 1);
// }

function fancifyWord(word, key) {
  let res = "";
  word.split("").forEach((letter) => (res += `${letter}${key}`));
  return res.slice(0, res.length - 1);
}

let res1 = fancifyWord("AMAZING", "_");
console.log(res1);
/**

    'A_M_A_Z_I_N_G`

 */

let res2 = fancifyWord("AMAZING", "~");
console.log(res2);
/**

    'A~M~A~Z~I~N~G`

    */
