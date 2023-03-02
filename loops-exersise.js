// create an array with 5 names, iterate over them, writing hello before each name
// Output: Hello Chelsey, Hello Jeff, Hello Laura
// https://chat.openai.com/chat/9a784f98-49d1-4210-b726-ae3b028e5882

const names = ["chelsey", "jeff", "laura", "zander", "tyler"];
//
names.forEach(function (name) {
  console.log(`Hello ${name}`);
});

// OR

names.forEach(helloer);

function helloer(name) {
  console.log(`Hello ${name}`);
}

// OR

names.forEach((name) => {
  console.log(`Hello ${name}`);
});

// OR

names.forEach((name) => console.log(`Hello ${name}`));

// language construcs
// for, forEach (callback), do/while

// methods
// .map, .forEach - methods on Array, which take a callback/function as a parameter

/**
This code creates an array called names with 5 strings representing names. It then uses the forEach method on the names array to iterate over each element in the array and call a function for each element. The function passed to forEach accepts one parameter, name, which represents the current element being iterated over.

Within the function, a message is logged to the console using string interpolation. The message is "Hello" followed by the current name. This is done using the backtick character () and the ${} syntax to insert the value of name` into the string.

The output of the code when run will be:

Copy code
Hello chelsey
Hello jeff
Hello laura
Hello zander
Hello tyler
However, only the first three names are mentioned in the problem statement. To achieve that, we can remove the last two names from the names array or add a conditional statement inside the forEach loop to check for the current name and only log the message if it matches one of the desired names.

The code also demonstrates various ways to write the same function using different syntaxes, such as using a separate named function (helloer) instead of an anonymous function passed directly to forEach, or using arrow functions with or without curly braces. The choice of syntax is a matter of personal preference and readability.

The code also mentions other language constructs and methods that are related to iterating over arrays, such as the for loop and the do/while loop, as well as the map method, which is similar to forEach but returns a new array with the values returned by the callback function.







 **/
