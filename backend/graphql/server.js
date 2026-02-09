import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

let churches = [
  { id: "1", name: "Full Gospel", location: "Kenya" },
  { id: "2", name: "Methodist Church", location: "Nigeria" },
  { id: "3", name: "Christ The King", location: "Australia" },
];

let members = [
  { id: "1", fullname: "Michael Smith" },
  { id: "2", fullname: "Jonathan michael" },
  { id: "3", fullname: "Joy Michigan" },
];

const typeDefs = `#graphql
    type Church{
        id:ID!
        church_name:String!
        location:String!
        members:[Member!]!
    
    type Member{
        id:ID!
        fullname:String!
        church:Church!
    }
    type Query{
        churches:[Church!]!
        church(id:ID!):Church
        members:[Member!]!
        member(id:ID!):Member
    }
    input churchInput{
        id:ID!
        church_name:String!
        location:String!
        members:[memberInput]!
    }

    input memberInput{
        id:ID!
        fullname:String!
    }
    type Mutation{
        addChurch(input:churchInput):Church
        addMember(input:memberInput):Member
    }
`;

function addChurch(id, { church_name, members }) {
  return {
    id: id,
    church_name: church_name,
    members,
  };
}
const resolvers = {
  Query: {
    Churches() {
      return churches;
    },
    Church(_, { id }) {
      return churches.find((church) => church.id === id);
    },
    Members() {
      return members;
    },
    Members(_, { id }) {
      return members.find((member) => member.id === id);
    },
  },
  Mutation: {
    addChurchMut: (_, { input }) => {
      let id = crypto.randomUUID();
      churches[id] = input;
      return addChurch(id, input);
    },
  },
};

const PORT = 4000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, { listen: { port: PORT } });

console.log(`Server running at: ${url}`);
