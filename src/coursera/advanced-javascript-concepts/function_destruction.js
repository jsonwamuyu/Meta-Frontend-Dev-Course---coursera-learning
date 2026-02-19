// Without Destructuring
function displayProductInfo(product) {
  const productName = product.productName;
  const price = product.price;
  console.log(`Product: ${productName}, Price: ${price}`);
}

function greetUser(user) {
  const { username, email } = user;
  console.log(`Hello, ${username}! Your email is ${email}.`);
}

// With Destructuring
function displayProductInfoDestructured({ productName, price }) {
  console.log(`Product: ${productName}, Price: ${price}`);
}

function greetUserDestructured({ username, email }) {
  console.log(`Hello, ${username}! Your email is ${email}.`);
}

function addNumbers(...numbers) {
  //   const sum = numbers.reduce((acc, num) => acc + num, 0);
  let summation = 0;
  for (let num of numbers) {
    summation += num;
  }
  return summation;
}
console.log(addNumbers(1, 2, 3, 4, 5)); // Output: 15
console.log(addNumbers(10, 20)); // Output: 30
