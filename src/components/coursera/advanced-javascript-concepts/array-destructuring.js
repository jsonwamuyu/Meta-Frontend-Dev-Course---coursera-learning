const products = [
  ["Laptop", 1000],
  ["Phone", 500],
  ["Tablet", 700],
];
// Destructure the second product's name and price from the array
let subjects = [
  ["Maths", 67],
  ["Science", 78],
];

const [maths, science] = subjects;
console.log(maths, science);

const [, [scie, grade]] = subjects;
console.log(scie, grade);

console.log(products[1][0], products[1][1]);
// const {secondProductName, secondProductPrice} = (products[1][0], products[1][1])
console.log(products);
const [, [secondProductName, secondProductPrice]] = products;
const [, , [one, two]] = products;
console.log(one, two);
console.log(`Second product: ${secondProductName}`);
console.log(`Second product price: ${secondProductPrice}`);

// Introduction:

// Destructuring is a powerful feature in JavaScript that allows us to extract values from arrays and objects and assign them to variables in a concise and readable way. In this lab, you will practice destructuring values from arrays and objects and using them in string literals to create dynamic and meaningful output.

// Goal:

// The goal of this lab is to help  learners understand and apply JavaScript destructuring syntax for both arrays and objects. Learners will practice extracting specific values and utilizing them effectively in template literals.

// Objectives:

// By the end of this lab, learners will:

// Understand and apply array destructuring to extract specific values.

// Understand and apply object destructuring to access specific properties.

// Use template literals to create dynamic strings using destructured values.

// Debug and fix issues related to destructuring.

// Problem Statement

// You will work with the following tasks:

// 1.  An array of arrays, where each inner array contains a product's name and price. Your task will be to destructure the second product's name and price, and print the following:

// Second product: ${secondProductName}

// Second product price: ${secondProductPrice}

// 2.  An object representing a review that contains properties like title, description, author, and timePosted. Your task will be to destructure the author, title, and timePosted from the object and use them to print a sentence:

// ${author} posted a review titled, ${title} at ${timePosted}.

// Instructions:

// Part 1: Working with Arrays

// Step 1: Open the array_destructuring.js File

// Navigate to the Arrays_Objects folder under PROJECT folder and locate the array_destructuring.js file.

// Open the file to view the provided code skeleton.

// Step 2: Understand the concept of  Array Structure

// Before working with the provided code, let's briefly explain what array destructuring means:

// Array destructuring is a syntax that allows you to unpack values from an array into individual variables.

// For example, consider an array with two elements:

// 54321
// const item = ["Laptop", 1000];
// const [name, price] = item; // Destructures the array into variables
// console.log(name); // Output: Laptop
// console.log(price); // Output: 1000

// Here, the name variable takes the first value, and the price variable takes the second value from the array.

// Step 3: Understand the Provided Array Structure

// Initial Code (array_destructuring.js)

// The code includes an array of arrays, where each inner array represents a product's name and price.

// 456
// const products = [
//     ["Laptop", 1000],
//     ["Phone", 500],
//     ["Tablet", 700]
// ];

// Step 4: Destructure the Second Product

// Extract the second product's name and price using array destructuring syntax.

// Print the extracted values using the following format:

// 2
// console.log(`Second product: ${secondProductName}`);
// console.log(`Second product price: ${secondProductPrice}`);
// Step 5:  Execute the program by clicking the play button displayed below.

// step 6 : After running the code, the output will be displayed as shown below

// solution

// Note:  Before looking the  given solution, it is highly recommended to try writing the code yourself based on the hints that are provided and concepts you have learned.

// 1213141191086745321

// Rest operator in object destructuring
const user = {
  name: "Alice",
  age: 30,
  email: "alice@example.com",
};

const { name: userName, ...rest } = user;
console.log(userName); // Alice
console.log(rest); // {age: 30, email: "alice@example.com"}

// Spread operator in object destructuring
const student = {
  name: "Bob",
  grade: "A",
  course: "JavaScript",
};
console.log(student);
const updatedStudent = { ...student, grade: "A+" };
console.log(updatedStudent); // {name: "Bob", grade: "A+", course: "JavaScript"}

// Nested array destructuring
const nestedArray = [1, [2, 3], 4];
const [first, [second, third], fourth] = nestedArray;
console.log(first);
console.log(second);
console.log(third);
console.log(fourth);


