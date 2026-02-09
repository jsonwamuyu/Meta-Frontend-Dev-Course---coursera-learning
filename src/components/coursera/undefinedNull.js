// Undefined - a variable has been declared but no value assigned to it
// REM: when we do not assigned a value to a declared variable, Javascript automatically assign it a value of undefined
let user;
console.log(user);

if (user === undefined) {
  user = "John Doe";
  console.log("Assigned user: ", user);
}

user = "Jay";
console.log(user);

let person = {
  fullname: "Johnson",
  gender: "Male",
};

console.log(person);
console.log(person.height);

// Null - intentionally
let fruits = null;
console.log(fruits);
fruits = ["mango"];
console.log(fruits);

// Empty string - without any character in it
let username = "";
console.log("Empty string: ", username);

let username2 = " ";
console.log("spaced string: ", username2);

function addTwoNums(num1, num2) {
  //   console.log(num1 + num2);
  try {
    if (typeof num1 != "number") {
      throw new TypeError(`${num1} is not a number`);
    } else if (typeof num2 != "number") {
      throw new TypeError(`${num2} is not a number`);
    }
    console.log(num1 + num2);
  } catch (error) {
    console.log("Error: ", error);
  }
}
addTwoNums(22, "33");
addTwoNums(33, 45);
console.log("It still works");

function letterFinder(word, match) {
  // Check inputs - word can be less that 2 characters, match can only be 1 character, both must be strings
  let conditionOne = typeof match === "string" && match.length === 1;
  let conditionTwo = typeof word === "string" && word.length > 1;
  if (conditionOne && conditionTwo) {
    for (let i = 0; i <= word.length; i++) {
      if (word[i] === match) {
        console.log(`${match}: Match found at ${i}`);
      } else {
        console.log("No match found");
      }
    }
  } else {
    console.log("Invalid input entry");
  }
}

letterFinder("w", "w");
letterFinder([], []);
letterFinder("word", 2);
letterFinder("tests", "s");
