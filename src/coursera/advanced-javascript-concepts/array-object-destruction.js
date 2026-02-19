let { PI } = Math;
console.log(PI);

let { log } = console;
log("Hello world!");

let Person = {
  name: "Jay",
  age: 20,
  energy: 100,
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
};
let { name, age, energy } = Person;
console.log(name, age, energy);
// greet(); -> This will throw an error because 'this' is not bound to the Person object in this context
