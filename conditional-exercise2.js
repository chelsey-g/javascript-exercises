//An if statement checks a condition and will execute a task if that condition evaluates to true.
//if...else statements make binary decisions and execute different code blocks based on a provided condition.
//We can add more conditions using else if statements.
//Comparison operators, including <, >, <=, >=, ===, and !== can compare two values.
//The logical and operator, &&, or “and”, checks if both provided expressions are truthy.
//The logical operator ||, or “or”, checks if either provided expression is truthy.
//The bang operator, !, switches the truthiness and falsiness of a value.
//The ternary operator is shorthand to simplify concise if...else statements.
//A switch statement can be used to simplify the process of writing multiple else if statements. The break keyword stops the remaining cases from being checked and executed in a switch statement.

let weatherToday = "sunny";

switch (weatherToday) {
  case "cloudy":
    console.log("The sky will be gray.");
    break;
  case "rainy":
    console.log("The sky will be dark and gloomy.");
    break;
  case "stormy":
    console.log("The sky will be dark and green.");
    break;
  case "sunny":
    console.log("The sky will be bright and clear!");
    break;
  default:
    console.log("The blinds are closed. I cannot tell you the weather.");
    break;
}

let name = "";

function greeting(name) {
  return;
}

function add(num) {
  if (num == 1) {
    return "sup";
  } else {
    return "nope";
  }
}

switch (name) {
  case 4:
    break;
  case 5:
    bresk;
}

function name(yo) {
  return yo == "sup" ? 1 : 0;
}

// define the function
// tajes parameters
// return something different
// call the function!, set it equal to a variable
// do somethibng iwth the variable

let res = add(1);
console.log(res); // sup

let res = "Chesley".toUpperCase();
console.log(res); // CHELSEY
