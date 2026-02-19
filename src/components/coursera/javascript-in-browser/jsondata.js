const user = {
  name: "John Doe",
  age: 30,
  city: "New York",
  hobbies: ["reading", "traveling", "coding"],
  education: {
    degree: "Bachelor's",
    major: "Computer Science",
    university: "XYZ University",
  },
};

// convert it into JSON
const jsonUserData = JSON.stringify(user);
console.log(jsonUserData);

// Convert it into a regular object
const userOriginal = JSON.parse(jsonUserData);
console.log(userOriginal);
