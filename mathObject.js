//  Math = built-in object that provides a collection of properties and methods

let x = 3.21;
let y = 2;
let z;

z = Math.round(x); //  just rounds
z = Math.floor(x); //  rounds down
z = Math.ceil(x); //  round up
z = Math.trunc(x); //  eliminates any decimal portion
z = Math.pow(x, y); //  adds to the power of..
z = Math.sqrt(x); //  finds the square root
z = Math.log(x); //  finds the natural logarithms of a number
z = Math.sin(x); //  trigonometry
z = Math.cos(x); //  trigonometry
z = Math.tan(x); //  trigonometry
z = Math.abs(x); //  find the absolute value of a number
z = Math.sign(x); //  find the sign of a number

let max = Math.max(x, y, z); // displays the maximum value of the selected variables
let min = Math.min(x, y, z); // display the minimum value of the selected variables

console.log(z);
console.log(max);
console.log(min);
