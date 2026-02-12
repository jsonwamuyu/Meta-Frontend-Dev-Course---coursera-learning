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
