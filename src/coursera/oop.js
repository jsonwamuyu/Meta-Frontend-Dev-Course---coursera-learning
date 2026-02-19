// OOP involves grouping data and functionality into objects


let shoeOne = {
  size: 10,
  price: 45.55,
  taxRate: 1.234,
  totalPrice: () => {
    return shoeOne.price * shoeOne.taxRate;
  },
};

console.log(shoeOne.totalPrice());

class Shoe {
  constructor(model, size, taxRate, price) {
    this.model = model;
    this.size = size;
    this.taxRate = taxRate;
    this.price = price;
  }
  totalPrice() {
    return this.taxRate * this.price;
  }
}

let j4 = new Shoe("J4", 10, 1.2, 40);
console.log(j4.model, j4.size, j4.price, j4.totalPrice());

class Student {
  // constructor(fullname, course){

  // }
  studentDetails(fullname) {
    return `Hello ${this.fullname}`;
  }
}

let mike = new Student();
console.log(mike.studentDetails("Mike"));
