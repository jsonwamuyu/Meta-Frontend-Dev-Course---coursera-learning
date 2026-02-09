// Functional programming paradigms(FP)

function dollarToShilling(dollar, rate) {
  return dollar * rate;
}

console.log(dollarToShilling(100, 128.32));

// If a function has no return type, by default it returns undefined
function helloWorld() {
  //   console.log("Hello world");
}
console.log(helloWorld());

function doubleNumber(num) {
  return num * 2;
}

function squareNumber(num) {
  return num * num;
}

let doubled = doubleNumber(2);
let doubledSquared = squareNumber(doubled);
console.log(doubledSquared);

// Object - a collection of related data and behaviors
const User = {
  // Adding data/properties
  fullname: "Jay",
  email: "jay@example.com",
  isActive: true,

  // Add behavior now
  login() {
    console.log(`${this.fullname} has logged in - ${this.isActive}`);
  },
  logout() {
    console.log(`${this.fullname} has logged out`);
  },
};

// Model a bank account object - data(state) and behaviors(methods)
const BankAccount = {
  owner: "Trump",
  balance: 10,

  deposit(amount) {
    if (amount <= 0) {
      console.error("Zero amounts not allowed");
      return;
    }
    this.balance += amount;
  },
  withdraw(amount) {
    if (amount > this.balance) {
      console.error("Insufficient funds");
      return;
    }
    this.balance -= amount;
  },
  getBalance() {
    return this.balance;
  },
};

console.log("Balance: ", BankAccount.balance);
console.log(BankAccount.getBalance());
BankAccount.deposit(10);
console.log(BankAccount.getBalance());
BankAccount.withdraw(23);
BankAccount.withdraw(19);
console.log(BankAccount.getBalance());

// Using encapsulation to protect the object from anyhow accessibility and changing
function createBankAccount(owner, initialBalance) {
  let balance = initialBalance; // Private variable

  return {
    getOwner() {
      return owner;
    },
    getBalance() {
      return balance;
    },
    deposit(amount) {
      if (amount <= 0) {
        throw new Error("Only positive amount allowed.");
      }
      balance += amount;
    },
    withdraw(amount) {
      if (amount > balance) {
        throw new Error("Insufficient funds.");
      }
      balance -= amount;
    },
  };
}

const account = createBankAccount("Joan", 1000);
console.log("Balance not allowed: ", account.balance); // Undefined
account.deposit(10);
console.log("New balance: ", account.getBalance());
account.withdraw(100);
console.log("Newest balance: ", account.getBalance());
console.log(`Account owner: ${account.getOwner()}`);

// prototype

function Product(name, price) {
  if (price <= 0) {
    throw new Error("Price must be positive");
  }
  ((this.name = name), (this.price = price), (this.isAvailable = true));
}
Product.prototype.applyDiscount = function (percentage) {
  if (percentage <= 0 || percentage > 100) {
    throw new Error("Invalid discount");
  }
  this.price -= (this.price * percentage) / 100;
};

Product.prototype.toggleVisibility = function () {
  this.isAvailable = !this.isAvailable;
};

const laptop = new Product("Lenovo", 10000);
laptop.applyDiscount(8);
console.log(laptop);

laptop.toggleVisibility();
console.log(laptop);

class ProductClass {
  constructor(name, price) {
    if (price <= 0) {
      throw new Error("Price must be positive");
    }
    ((this.name = name), (this.price = price), (this.isAvailable = true));
  }
  applyDiscount(percentage) {
    if (percentage <= 0 || percentage > 100) {
      throw new Error("Invalid discount");
    }
    this.price -= (this.price * percentage) / 100;
  }
  toggleVisibility() {
    this.isAvailable = !this.isAvailable;
  }
}

// class inheritance

class Train {
  constructor(color, lightsOn) {
    this.color = color;
    this.lightsOn = lightsOn;
  }
  toggleLights() {
    this.lightsOn = !this.lightsOn;
  }
}

class HighSpeedTrain extends Train {
  constructor(passengers, highSpeed, color, lightsOn) {
    super(color, lightsOn);
    this.passengers = passengers;
    this.highSpeed = highSpeed;
  }
  toggleHighSpeed() {
    this.highSpeed = !this.highSpeed;
  }
}
