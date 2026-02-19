let person = {
  fullname: "John Doe",
  age: 23,
  height: "5.6 fts",
};

console.log(person);
console.log("person name is: ", person.fullname);

// Object literal
let school = {};
console.log("School: ", school);

// Dot notation to add new object's property
school.name = "France University";

console.log(`School: ${school.name}`);

console.log("New school: ", school);
school.country = "France";
console.log("Newest school: ", school);

//updating the value of a property in an object
school.country = "Kenya";
school.name = "Nairobi university";
console.log("Updated school: ", school);

// Adding property through bracket notation
let course = {};
console.log(course);
course["title"] = "Computer science";
console.log("New course", course);
course["Department"] = "Information technology";
console.log("Newest course", course);

course["title"] = "Business management";
course["Department"] = "Business";

console.log("Changed course", course);
