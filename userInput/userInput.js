// How to accept user input

// --- Window Prompt --- //
// let username;
// username = window.prompt("What's your username?");
// console.log(username);
// --------------------- //

// --- HTML Textbox --- //
document.getElementById("mySubmit").onclick = function () {
  username = document.getElementById("myText").value;
  console.log(username);
  document.getElementById("myH1").textContent = `Hello ${username}`;
};
