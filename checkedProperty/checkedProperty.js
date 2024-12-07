//  .checked = property that determines the checked state of an HTML checkbox or radio button element.

const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmitBtn = document.getElementById("mySubmitBtn");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

document.getElementById("mySubmitBtn").onclick = function () {
  if (myCheckbox.checked) {
    //console.log("You are subscribed");
    subResult.textContent = "You are subscribed";
  } else {
    //console.log("You are not subscribed");
    subResult.textContent = "You are not subscribed";
  }

  if (visaBtn.checked) {
    paymentResult.textContent = "Payment method: Visa";
  } else if (masterCardBtn.checked) {
    paymentResult.textContent = "Payment method: MasterCard";
  } else if ((payPalBtn, checked)) {
    paymentResult.textContent = "Payment method: PayPal";
  } else {
    paymentResult.textContent = "Payment method: None selected";
  }
};
