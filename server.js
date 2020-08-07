const { ApolloServer, gql } = require("apollo-server");

const todos = [
    { task: "Wash car", completed: false },
    { task: "Clean room", completed: true }
];

const typeDefs = gql`
  type Todo {
    task: String
    completed: Boolean
  }
  type Query {
    anything: String
  }
`;

const server = new ApolloServer({
    typeDefs
});

server.listen().then(({ url }) => {
    console.log(`Server listening on ${url}`);
});
