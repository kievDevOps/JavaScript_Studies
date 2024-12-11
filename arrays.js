//  array = a variable like structure that can hold more than 1 value

let fruits = ["apple", "orange", "banana"];

console.log(fruits); // This will print the array on the console
console.log(fruits[0]); // This will print apple

fruits.push("coconut");
fruits.pop();
fruits.unshift("mango");
fruits.shift();

let numFruits = fruits.length();
console.log(numFruits);

let index = fruits.indexOf("banana");
console.log(index);

fruits.sort().reverse();
console.log(fruits);
