//  string slicing = creating a substring from a portion of another string
//  string.slice(start, end)

let fullName = "Kiev Dev";
let firstName = fullName.slice(0, 4);
let lastName = fullName.slice(5, 8);

console.log(firstName); // Kiev
console.log(lastName); // Dev

let firstChar = fullName.slice(0, 1);
let lastChar = fullName.slice(-1);

console.log(firstChar); // K
console.log(lastChar); // v

const email = "kievdevops@gmail.com";
let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@"));

console.log(username); // kievdevops
console.log(extension); // @gmail.com
