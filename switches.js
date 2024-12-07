// Switch = can be an efficient replacement to many if else statements

let day = "Saturday";

switch (day) {
  case "Monday":
    console.log("Today is Monday");
    break;
  case "Tuesday":
    console.log("Today is Tuesday");
    break;
  case "Wednesday":
    console.log("Today is Wednesday");
    break;
  case "Thursday":
    console.log("Today is Thursday");
    break;
  case "Friday":
    console.log("Today is Friday");
    break;
  case "Saturday":
    console.log("Today is Saturday");
    break;
  case "Sunday":
    console.log("Today is Sunday");
    break;
  default:
    console.log("Invalid day");
}

// -------------------------------- //

let testScore = 92;
let letterGrade;

switch (true) {
  case testScore >= 90:
    letterGrade = "A+";
    break;
  case testScore >= 80:
    letterGrade = "A";
    break;
  case testScore >= 70:
    letterGrade = "B";
    break;
  case testScore >= 60:
    letterGrade = "C";
    break;
  case testScore >= 50:
    letterGrade = "D";
    break;
  default:
    letterGrade = "F";
}

console.log(`Your letter grade is ${letterGrade}`);
