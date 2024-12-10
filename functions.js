//  function = a section of reusable code
//  declare code once, use whenever you want
//  call the function to execute the code

function greetUser() {
  console.log("Hello, user!");
}

greetUser(); // call the function

//  ---------------------------  //

function happyBday(username, age) {
  console.log(`Happy Birthday, ${username}! You are ${age} years old.`);
}

happyBday("Kiev Dev", 24); // call the function with arguments

//  ---------------------------  //

function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}
console.log(add(2, 3));
console.log(subtract(2, 3));
console.log(multiply(2, 3));
console.log(divide(2, 3));

//  ---------------------------  //

function isEven(number) {
  return number % 2 === 0;
}

console.log(isEven(2)); // true

//  ---------------------------  //

function isValidEmail(email) {
  if (email.includes("@")) {
    return true;
  } else {
    return false;
  }
}
console.log(isValidEmail("Kiev@Fake.com"));
console.log(isValidEmail("ultrarealemail.com"));
