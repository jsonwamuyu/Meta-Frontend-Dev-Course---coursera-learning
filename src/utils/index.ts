// This utility function adds two numbers and returns the result.(default export)
export default function AddNumbers(num1: number, num2: number): number {
  return num1 + num2;
}

// This utility function multiplies two numbers and returns the result.(named export)
function MultiplyNumbers(num1: number, num2: number): number {
  return num1 * num2;
}

export { MultiplyNumbers };
