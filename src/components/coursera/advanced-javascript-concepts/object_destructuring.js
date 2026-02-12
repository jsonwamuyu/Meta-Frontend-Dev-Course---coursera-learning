const review = {
  title: "Amazing Product",
  description: "This product exceeded my expectations.",
  author: "John Doe",
  timePosted: "2024-11-24",
};

let { author, title, timePosted } = review;
// Destructure the author, title, and timePosted properties from the review object
console.log(`${author} posted a review titled, ${title} at ${timePosted}.`);

const person = {
  name: "Jay Jay",
  email: "jay@example.com",
  isActive: true,
};

let { name, isActive } = person;
console.log(`${name} is ${isActive ? "active" : "inactive"}`);

// Part 2: Working with Objects

// Step 1: Open the object_destructuring.js File

// Navigate to the Arrays_Objects folder under PROJECT folder and locate the object_destructuring.js file.

// Open the file to view the provided code skeleton.

// Step 2: Understand the Concept of Object Destructuring

// Object destructuring is a syntax in JavaScript that allows you to extract specific properties from an object and assign them to variables in a concise way. This simplifies the process of accessing and using object properties.

// For example, given the following review object:

// 12345
// const review = {
//     title: "Great Service",
//     author: "Jane Smith"
// };

// Instead of accessing each property individually like below:

// 123
// const author = review.author;
// const title = review.title;

// You can use destructuring to achieve the same result in a single line:

// 1
// const { title, author} = review;
// This extracts the author and title  properties from the review object and assigns them to variables with the same names.

// In next step, you will apply this concept to extract values from the review object and use them to construct a meaningful string using template literals.

// Step 3: Understand the Provided Object Structure

// The  object_destructuring.js file includes a review object with the following structure:

// 1234567
// const review = {
//     title: "Amazing Product",
//     description: "This product exceeded my expectations.",
//     author: "John Doe",
//     timePosted: "2024-11-24"
// };

// Step 4: Destructure Values from the Object.

// Extract the author, title, and timePosted using object destructuring syntax.

// Use these values to print a sentence in the following format

// 12
// console.log(`${author} posted a review titled, ${title} at ${timePosted}.`);

// Step 5:  Execute the program by clicking the play button displayed below.

// Follow the same steps outlined in Step 5 of Part 1.

// step 6 : After running the code, the output will be displayed as shown below

// solution

// Note:  Before looking the  given solution, it is highly recommended to try writing the code yourself based on the hints that are provided and concepts you have learned.

// 1234567891011121314
// // Object representing a review
// const review = {
//     title: "Amazing Product",
//     description: "This product exceeded my expectations.",
//     author: "John Doe",
//     timePosted: "2024-11-24"
// };

// // Destructure properties from the review object
// const { author, title, timePosted } = review;

// Key Takeaways:

// Array destructuring simplifies the process of extracting specific elements.

// Object destructuring makes it easy to extract specific properties.

// Using template literals enhances readability and dynamic content generation.

// With this lab, you will gain hands-on experience in applying destructuring to real-world scenarios.

// Working with rest operator
const numbers = [1, 2, 3, 4, 5];
const [one, two, ...rest] = numbers;
console.log(rest);

// Spread operator

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined);

// Destructuring nested objects
const product = {
  productName: "Iphone",
  price: 7899,
  details: {
    manufacturer: "Apple",
    warranty: "1 year",
  },
};

const {
  productName,
  details: { manufacturer, warranty },
} = product;

console.log(productName); // Output: Iphone
console.log(manufacturer, warranty); // Output: Apple 1 year
