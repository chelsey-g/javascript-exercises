// create an array of 5 names, iterate over them, such that the output is:

// Hello Jeff, Chelsey, Laura, and Tyler! (all on one line)

// const names = ["jeff", "chelsey", "laura", "zander", "tyler"];
// const capitalizeName = names.map(function (item) {
//   return item.charAt(0).toUpperCase() + item.slice(1);
// });

// console.log(`Hello ${capitalizeName.join(", ")}!`);

// OR

// const names = ["jeff", "chelsey", "laura", "zander", "tyler"];

// const capitalizedNames = names
//   .map(function (item) {
//     return item.charAt(0).toUpperCase() + item.slice(1);
//   })
//   .join(", ");

// console.log(`Hello ${capitalizedNames}!`);

// OR

const names = ["jeff", "chelsey", "laura", "zander", "tyler"];

const capitalizedNames = names.map(function (item) {
  return item.charAt(0).toUpperCase() + item.slice(1);
});

function join(arr) {
  let output = "";
  arr.forEach((name, i) => {
    if (i < arr.length - 1) {
      output += `${name}, `;
    } else {
      output += `${name}`;
    }
  });
  return output;
}

let nameOutput = join(capitalizedNames);

console.log(`Hello ${nameOutput}!`);

// how to reimplement .join
