// Task 1
// WRITE YOUR CODE HERE - Create the logDairy function and use a for...of loop to log each item in the dairy array
var dairy = [
  "cheese",
  "sour cream",
  "milk",
  "yogurt",
  "ice cream",
  "milkshake",
];

function logDairy() {
  for (let d of dairy) {
    console.log(d);
  }
}

logDairy();

// Task 2
// WRITE YOUR CODE HERE - Create the birdCan function and use a for...of loop to log bird object's own properties

const animal = {
  canJump: true,
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
  for (let key of Object.keys(bird)) {
    console.log(key + ": " + bird[key]);
  }
}

birdCan();
// Task 3
// WRITE YOUR CODE HERE - Create the animalCan function and use a for...in loop to log all bird properties, including inherited ones
function animalCan() {
  for (let key in bird) {
    console.log(key + ": " + bird[key]);
  }
}

animalCan();

// Instructions
// Lab instructions
// 1 of 1 completed

// inLabInstructionsPart~hjkGn6u8Ee-qPgr_5E_v_w
// ​
// Introduction:

// In this lab, you will learn how to iterate over arrays and objects in JavaScript using loops. You’ll explore the for...of loop for working with arrays and objects, and the for...in loop for iterating through all properties, including inherited ones. By completing this lab, you’ll gain a practical understanding of these iteration techniques.

// Goal:

// The goal of this lab is to develop a strong foundation in iterating over arrays and objects using different looping constructs in JavaScript.

// Objectives:

// Use the for...of loop to iterate over arrays and objects' properties.

// Differentiate between iterating over an object’s own properties and its prototype properties.

// Use the for...in loop to iterate through both an object’s own and inherited properties.

// Understand how inheritance affects property visibility in JavaScript objects.

// Write modular, reusable functions for logging properties and their values.

// Learner Instructions:

// Lab Tasks:

// Task 1: Iterate Over an Array

// Objective: Use the for...of loop to iterate through an array of dairy products.

// Steps:
// Step 1: Open the solution.js file present under the LEARN folder. This is where you will write your code to iterate over arrays and objects in JavaScript using loops.

// Step 2: Create an array named dairy containing the following items:

// 1
// var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];
// Step 3: Write a function named logDairy() that:

// Uses the for...of loop to iterate over the dairy array.

// Console logs each item in the array.

// Step 4: Call the logDairy() function to display the output in the console.

// Expected Output:

// 123456
// cheese
// sour cream
// milk
// yogurt
// ice cream
// milkshake

// Task 2: Iterate Over an Object's Own Properties

// Objective: Use the for...of loop to iterate through an object’s own properties.

// Steps:
// Step 1: Start with the following object definitions:

// 1234567
// const animal = {
//     canJump: true
// };

// const bird = Object.create(animal);
// bird.canFly = true;
// bird.hasFeathers = true;
// Step 2: Create a function named birdCan() that:

// Uses the for...of loop to iterate through the bird object's own properties.

// Console logs the key and value of each property in the format: key: value.

// Step 3: Call the birdCan() function to display the output in the console.

// Expected Output:

// 12
// canFly: true
// hasFeathers: true

// Task 3: Iterate Over an Object and Its Prototype Properties

// Objective: Use the for...in loop to iterate through an object and its inherited properties.

// Steps:
// Step 1: Using the same object definitions from Task 2, create a function named animalCan() that:

// Uses the for...in loop to iterate through all properties of the bird object, including those inherited from its prototype (animal).

// Console logs the key and value of each property in the format: key: value.

// Step 2: Call the animalCan() function to display the output in the console.

// Expected Output:

// 123
// canFly: true
// hasFeathers: true
// canJump: true
// Step 3: After successfully modifying the solution.js file, navigate to File > Save to save changes in the file.

// To execute your modified JavaScript code and verify the function is working:

// Click the Run Code button in the top-right corner (shaped like a triangular "Play" button).

// Key Takeaways:

// The for...of loop is ideal for iterating through arrays or iterable objects.

// Use the for...of loop with Object.keys() or similar methods to restrict iteration to an object’s own properties.

// The for...in loop iterates through both an object’s own properties and those inherited from its prototype. Be cautious when using this loop, as it may include unwanted prototype properties.

// Understand how inheritance in JavaScript affects property visibility and accessibility during iteration.

// Encapsulating iteration logic in functions improves code reuse and readability.

// Final Step: Submit Your Code:

// Go to File > Save to ensure your work is saved.

// Submit your assignment: Click the "Submit Assignment" button in the Lab toolbar.

// Your code will be autograded and feedback will be available shortly on the Grades tab.
