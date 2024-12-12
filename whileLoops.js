//  while loop = repeat some code while some condition is true

let username = "";

while (username === "" || username === null) {
  username = window.prompt("Please enter your username");
}

console.log(`Hello ${username}`);

// ---------------------------------------------------------- //

let loggedIn = false;
let username2;
let password;

while (!loggedIn) {
  // ! = NOT
  username2 = window.prompt("Enter your username");
  password = window.prompt("Enter your password");

  if (username2 === "myUsername" && password === "myPassword") {
    loggedIn = true;
    console.log("Welcome! you are logged in");
  } else {
    console.log("Incorrect username or password");
  }
}
