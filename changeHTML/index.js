//  --------------   H1  -------------  /

// Create a new heading element
const newH1 = document.createElement("h1");

// Add attributes/properties
newH1.textContent = "I like pizza!";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

// Append element to DOM
document.getElementById("box1").prepend(newH1);

// Remove HTML element
document.getElementById("box1").removeChild(newH1);
