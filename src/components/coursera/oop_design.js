class Animal {
  constructor(color = "Yellow", energy = 100) {
    this.color = color;
    this.energy = energy;
  }
  isActive() {
    if (this.energy > 0) {
      energy -= 20;
      console.log("Energy is decreasing, current energy: " + this.energy);
    } else if (this.energy == 0) {
      this.sleep();
    }
  }
  sleep() {
    this.energy += 20;
    console.log("Energy levels increasing: ", this.energy);
  }
  getColor() {
    console.log(this.color);
  }
}

class Bird extends Animal {
  constructor(canFly = true, sound = "chirp", color, energy) {
    super(color, energy);
    this.canFly = canFly;
    this.sound = sound;
  }
}

class Cat extends Animal {
  constructor(
    sound = "purr",
    canJumpHigh = true,
    canClimbTrees = true,
    color,
    energy,
  ) {
    super(color, energy);
    this.sound = sound;
    this.canJumpHigh = canJumpHigh;
    this.canClimbTrees = canClimbTrees;
  }
  makeSound() {
    console.log(this.sound);
  }
}

class HouseCat extends Cat {
  constructor(
    houseCatSound = "meow",
    sound,
    canClimbTrees,
    canJumpHigh,
    color,
    energy,
  ) {
    super(canClimbTrees, canJumpHigh, sound, color, energy);
    this.houseCatSound = houseCatSound;
  }
  makeSound(option) {
    if (option) {
      super.makeSound();
    }
    console.log(this.houseCatSound);
  }
}

class Tiger extends Cat {
  constructor(
    tigerSound = "roar",
    sound,
    canClimbTrees,
    canJumpHigh,
    color,
    energy,
  ) {
    super(canClimbTrees, canJumpHigh, sound, color, energy);
    this.tigerSound = tigerSound;
  }
  makeSound(option) {
    if (option) {
      super.makeSound();
    }
    console.log(this.tigerSound);
  }
}

class Parrot extends Bird {
  constructor(canTalk = false, canFly, sound, color, energy) {
    super(canFly, energy, sound);
    this.canTalk = canTalk;
  }
  makeSound(option) {
    if (option) {
      super.makeSound();
    }
    if (this.canTalk) {
      console.log("This is a talking parrot");
    }
  }
}

// Task 1: Code a Person class
// WRITE YOUR CODE HERE - Define the Person class
class Person {
  constructor(name = "Tom", age = 20, energy = 100) {
    this.name = name;
    this.age = age;
    this.energy = energy;
  }

  // WRITE YOUR CODE HERE - Add a constructor with default parameters
  // WRITE YOUR CODE HERE - Add the sleep() method
  sleep() {
    this.energy += 10;
  }
  // WRITE YOUR CODE HERE - Add the doSomethingFun() method

  doSomethingFun() {
    this.energy -= 10;
  }
}
// Task 2: Code a Worker class
class Worker extends Person {
  constructor(xp = 0, hourlyWage = 10, name, age, energy) {
    super(name, age, energy);
    this.xp = xp;
    this.hourlyWage = hourlyWage;
  }
  goToWork() {
    this.xp += 10;
  }
}
// WRITE YOUR CODE HERE - Define the Worker class that extends Person
// WRITE YOUR CODE HERE - Add a constructor with additional parameters
// WRITE YOUR CODE HERE - Add the goToWork() method

// Task 3: Code an intern object, run methods
function intern() {
  // WRITE YOUR CODE HERE - Instantiate the Worker class with the intern properties
  let bob = new Worker(21, 110, "Bob", 0, 10);
  // WRITE YOUR CODE HERE - Call the goToWork() method
  bob.goToWork();
  // WRITE YOUR CODE HERE - Return the intern object
  return bob;
}

// Task 4: Code a manager object, methods
function manager() {
  // WRITE YOUR CODE HERE - Instantiate the Worker class with the manager properties
  let alice = new Worker("Alice", 30, 120, 100, 30);
  // WRITE YOUR CODE HERE - Call the doSomethingFun() method
  alice.doSomethingFun();
  // WRITE YOUR CODE HERE - Return the manager object
  return alice;
}
class Animal1 {
  constructor(lg) {
    this.legs = lg;
  }
}

class Dog extends Animal1 {
  constructor() {
    super(4);
  }
}

var result = new Dog();
console.log(result.legs);

class Animal2 {}

class Cat1 extends Animal2 {
  constructor() {
    super();
    this.noise = "meow";
  }
}

var result = new Animal2();
console.log(result.noise);

class Person3 {
  sayHello() {
    console.log("Hello");
  }
}

class Friend extends Person3 {
  sayHello() {
    console.log("Hey");
  }
}

var result = new Friend();
result.sayHello();
