//  setTimeout() = function in JavaScript that allows you to schedule the execution of a function after an amount of time (miliseconds)
//  Times are approximate (varies based on the workload of the JavaScript runtime env.)

//  setTimeout(callback, delay);
//  clearTimeout() = cancels a scheduled execution of a function

let timeoutId;

function startTimer() {
  timeoutId = setTimeout(() => window.alert("Hello"), 3000);
  console.log("Timer started");
}

function stopTimer() {
  clearTimeout(timeoutId);
  console.log("Timer stopped");
}
