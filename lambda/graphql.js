const { ApolloServer, gql } = require('apollo-server-lambda');

// Construct GraphQL schema
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Provide resolver functions for schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello, world!',
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
});

exports.handler = server.createHandler();
