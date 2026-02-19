let age = 10;

console.log(typeof age);
if (typeof age === "number") {
  if (age >= 65) {
    console.log("Retired - getting pension.");
  } else if (age < 65 && age >= 18) {
    console.log("Salaried.");
  } else if (age < 18) {
    console.log("Getting allowance.");
  } else {
    console.log("Unknown age");
  }
} else {
  console.log("Invalid age entry");
}

function determine_payment(age) {
  if (typeof age === "number" && age > 0) {
    if (age >= 65) {
      console.log("Retired - getting pension.");
    } else if (age < 65 && age >= 18) {
      console.log("Salaried.");
    } else if (age < 18) {
      console.log("Getting allowance.");
    } else {
      console.log("Unknown age");
    }
  } else {
    console.log("invalid age entry.");
  }
}

determine_payment(-12);
determine_payment(0);
determine_payment(89);
determine_payment("100");

// Switch case
let day = "Friday";
switch (day) {
  case "Monday":
    console.log("Go to gym");
    break;
  case "Tuesday":
    console.log("Football practice");
    break;
  case "Wednesday":
    console.log("Study JavaScript");
    break;
  case "Thursday":
    console.log("Learn React.js");
    break;
  case "Friday":
    console.log("Home party");
    break;
  case "Saturday":
    console.log("Mike wedding");
    break;
  case "Sunday":
    console.log("Church service");
    break;
  default:
    console.log("No such day.");
    break;
}
