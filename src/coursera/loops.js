// We use loops to continually execute a block of code until a certain condition is me

// Syntax
// for(initialization; condition; increment){
// code block to continually execute
// }

for (let num = 0; num <= 10; num++) {
  console.log(num);
}

let age = 0;

for (; age < 18; age++) {
  console.log(`age: ${age}`);
}

// Looping through an array
let fruits = ["Apple", "Oranges", "Banana", "Mango"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// While loop - used when you do not know before hand/ in advance how many times you will loop

let num = 0;
while (num < 5) {
  console.log("While loop");
  num++;
}
