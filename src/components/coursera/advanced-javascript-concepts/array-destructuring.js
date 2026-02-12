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
