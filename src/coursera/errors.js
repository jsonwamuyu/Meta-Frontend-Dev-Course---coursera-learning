let b = "Mike";
let c = "Jane";
console.log("Hello", b + c);

try {
  console.log("Hello");
} catch (error) {
  console.log("Error");
}

try {
  let bkjk = [];
  bkjk.toUpperCase();
} catch (error) {
  console.log(error);
}

try {
  let num = nu1;
} catch (error) {
  console.log("The Error: ", error);
  console.log("Error message: ", error.message);
  console.log("Error stack: ", error.stack);
}

function divideNumbers(num, num1) {
  if (num1 === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return num / num1;
}

try {
  console.log(divideNumbers(10, 0));
} catch (error) {
  console.error(error.message);
}
