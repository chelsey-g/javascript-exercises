//conditional statements exercises
// https://www.youtube.com/watch?v=IsG4Xd6LlsM

//Hour
//If the hour is between 6am - 12pm: Good morning!
// If it is between 12pm and 6 pm: Good afternoon!
//Otherwise: Good evening!

// EXAMPLE IF/ELSE STATEMENT
// if (condition) {
//     statement
// }
// else if (anotherCondition) {
//     statement
// }
//     else if (yetAnotherCondition) {
//         statement
//     }
//     else {
//     statement
//     }

function timeGreeting() {
  let hour = 10;
  if (hour >= 6 && hour < 12) {
    console.log("Good morning!");
  }
  if (hour <= 12 && hour < 6) {
    console.log("Good afternoon!");
  } else {
    console.log("Good evening!");
  }
  return timeGreeting();
}

module.exports = timeGreeting;

// This is a JavaScript function called timeGreeting() which takes no arguments and returns nothing. Here's a step-by-step explanation of what the function does:

//The function declares a variable called hour and sets its value to 10.
//The function then checks if the value of hour is between 6 AM and 12 PM using an if statement. If hour is between 6 AM and 12 PM, the function logs the message "Good morning!" to the console.
//Next, the function checks if hour is less than or equal to 12 (i.e., noon) and also less than 6 (which is always false). If both conditions are true, the function logs the message "Good afternoon!" to the console. However, this check is redundant because the if condition will always be false since no value can be both less than or equal to 12 and less than 6.
//Finally, if the previous two checks failed, the function logs the message "Good evening!" to the console.
//The function then calls itself recursively using return timeGreeting(). However, this is not necessary because the function does not require recursion and could be called directly without using recursion.
//The function exports itself using module.exports = timeGreeting so that it can be used by other JavaScript files.
//To summarize, this function greets the user based on the current time of day, and then needlessly calls itself recursively.
