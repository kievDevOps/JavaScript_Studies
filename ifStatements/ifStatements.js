//  If Statements = ia a condition is true, execute some code, if not, do something else.

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age;

mySubmit.onclick = function () {
  age = myText.value;
  age = Number(age);

  if (age >= 100) {
    resultElement.textContent = "You are TOO old to enter this site.";
  } else if (age == 0) {
    resultElement.textContent = "You can't enter. You were just born.";
  } else if (age >= 18) {
    resultElement.textContent = "You are old enough to enter this site.";
  } else if (age < 0) {
    resultElement.textContent = "Your age can't be below zero.";
  } else {
    resultElement.textContent = "You must be 18+ to enter this site.";
  }

  //----------------------------------------------//

  let old = 15;
  let hasLicense = false;

  if (old >= 16) {
    console.log("You are old enough to drive.");
    if (hasLicense) {
      console.log("You have your license!");
    } else {
      console.log("You do not have a driver's license.");
    }
  } else {
    console.log("You must be 16+ to have a license.");
  }
};
