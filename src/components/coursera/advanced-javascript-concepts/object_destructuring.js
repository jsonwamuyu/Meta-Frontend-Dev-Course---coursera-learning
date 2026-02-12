const review = {
  title: "Amazing Product",
  description: "This product exceeded my expectations.",
  author: "John Doe",
  timePosted: "2024-11-24",
};

let { author, title, timePosted } = review;
// Destructure the author, title, and timePosted properties from the review object
console.log(`${author} posted a review titled, ${title} at ${timePosted}.`);

const person = {
  name: "Jay Jay",
  email: "jay@example.com",
  isActive: true,
};

let { name, isActive } = person;
console.log(`${name} is ${isActive ? "active" : "inactive"}`);
