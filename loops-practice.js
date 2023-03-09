// basic for loop examples 3/8/23
// https://www.youtube.com/watch?v=Kn06785pkJg
//https://www.youtube.com/watch?v=s9wW2PpJsmQ

//for loops
// common use - loop through an array, repetitve strings

// for (let i = 5; i > 1; i--) {
//   if (i % 2 !== 0) console.log(i);
// }

for (let i = 1; i <= 5; i++) {
  if (i % 2 !== 0) console.log(i);
}

// const names = ["john", "bob", "mary", "joe"];

// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
//   //   if (i === 3) break;
// }

// for Of loop example, slower

// for (name of names) console.log(name);

// const user = {
//   firstName: "John",
//   lastName: "Doe",
// };

// for (key in user) console.log(user[key]);

// WHILE EXAMPLES - break/continue
// break stops the loop completely, continue stops the current loop, and continues to the next loop

// let i = 0;
// while (i < 10) {
//   i++;
//   if (i === 5) continue;
//   console.log(i);
// }

// do while example - the do statement will always run the first time, checks condition after, if it doesnt equal to true, the loop ends

// let i = 0;
// do {
//   i++;
//   if (i === 5) continue;
//   console.log(i);
// } while (i < 10);
// {
// }

//.forEach loop examples --- great for arrays

// const animals = ["cat", "dog", "horse", "sheep", "bird"];

// animals.forEach((animal) => {
//   console.log(animal);
// });
