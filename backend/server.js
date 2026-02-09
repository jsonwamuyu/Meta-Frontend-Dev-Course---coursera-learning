import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql
  type Book{
    id:ID!
    title:String!
    author: Author!
  }

  type Author{
    id:ID!
    fullname:String!
    books:[Book!]!
  }

  type Query{
    Books:[Book!]!
    Authors:[Author!]!
    Book(id:ID!): Book
    Author(id:ID!): Author
  }

`;

const books = [
  { id: "1", title: "1984", authorId: "1" },
  { id: "2", title: "Brave New World", authorId: "2" },
  { id: "3", title: "Fahrenheit 451", authorId: "3" },
];

const authors = [
  { id: "1", fullname: "George Orwell" },
  { id: "2", fullname: "Aldous Huxley" },
  { id: "3", fullname: "Ray Bradbury" },
];

const resolvers = {
  Query: {
    Books() {
      return books;
    },
    Author(_, { id }) {
      return authors.find((author) => author.id === id);
    },
    authors() {
      return authors;
    },
    Book(_, { id }) {
      return books.find((book) => book.id === id);
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });
console.log(`Server running at ${url}`);

// const typeDefs = `#graphql
// type Person{
// id:ID!
// fullname:String!}
// type Query{
// person:Person!
// }
// `;

// const resolvers = {
//   Query: {
//     person(_, parent, args, context) {
//       return { id: "1", fullname: "John Doe" };
//     },
//   },
// };
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// });
// const { url } = await startStandaloneServer(server);
// console.log(`Sever running at ${url}`);
