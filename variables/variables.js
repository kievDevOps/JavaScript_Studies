// Variable is a container that stores a value.
// Behaves as if it's the value it contains.

// 1. Declaration       let x;
// 2. Assignment        x = 100;

let x;
x = 100;
console.log(x); // This will print the value atributted to x on the console

let y = 200;
console.log(y); // This will print the value atributted to y on the console

// - Number variables

let age = 24;
let price = 10.99;
let gpa = 4.0;

console.log(typeof age); // This will print the data type of the selected variable
console.log("You are ${age} years old");
console.log("The price is $${price}");
console.log("Your gpa is: ${gpa}");

// - String variables

let firstName = "Kiev";
let favoriteFood = "Yakisoba";
let email = "kievdevops@gmail.com";

console.log(typeof firstName); // This will print the data type of the selected variable
console.log(
  `My name is ${firstName}, and my favorite food is ${favoriteFood}. My email is ${email}`
);

// - Boolean variables

let online = true;
let forSale = false;
let isStudent = true;

console.log("Kiev is online: ${online}");
console.log("Is this car for sale: ${forSale}");
console.log("Enrolled: ${isStudent}");

// - Mixed variables

let fullName = "Kiev Dev";
let old = 24;
let isMale = true;

document.getElementById("p1").textContent = "Your name is ${fullName}";
document.getElementById("p2").textContent = "You are ${old} years old";
document.getElementById("p3").textContent = "You are male: {isMale}";
