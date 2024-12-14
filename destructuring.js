//  destructuring = extract values from arrays and objects, then assign them to variables in a convenient way
//  [] = to perform array destructuring
//  {} = to perform object destructuring

// EXAMPLE 1 //
//  SWAP THE VALUE OF TWO VARIABLES

let a = 10;
let b = 20;

[a, b] = [b, a];

console.log(a);
console.log(b);

// EXAMPLE 2 //
//  SWAP TWO ELEMENTS IN AN ARRAY

const colors = ["red", "green", "blue", "black", "white"];
[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);

// EXAMPLE 3 //
//  ASSIGN ARRAY ELEMENTS TO VARIABLES

const [firstColor, secondColor, thirdColor] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);

// EXAMPLE 4 //
//  EXTRACT VALUES FROM OBJECTS

const person = {
  name: "John Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
  },
};

const { name, age, address } = person;

console.log(name);
console.log(age);
console.log(address.street);
console.log(address.city);
console.log(address.state);

// EXAMPLE 5 //
//  DESTRUCTURE IN FUNCTION PARAMETERS

function greet({ name, age }) {
  console.log(`Hello, my name is ${name} and I am ${age} years old.`);
}

greet(person);
