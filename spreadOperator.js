//  Spread Operators = ... allows an iterable such as an array or string to be expanded into separate elements
//  unpacks the elements

let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

console.log(maximum); // 5

// --------------------------------- //

let username = "Kiev Dev";
let chars = [...username];

console.log(chars); // [ 'K', 'i', 'e', 'v', ' ', 'D', 'e', 'v' ]

// --------------------------------- //

let fruits = ["apple", "orange", "banana"];
let vegetables = ["carrots", "celery", "potatoes"];
let foods = [...fruits, ...vegetables, "eggs", "milk"];

console.log(foods);
