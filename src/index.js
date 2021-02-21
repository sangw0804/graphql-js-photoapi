const { ApolloServer } = require('apollo-server');

const { typeDefs } = require('./typeDefs');
const { resolvers } = require('./resolvers');
const { context } = require('./context');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context
});

server
    .listen()
    .then(({ url }) => console.log(`GraphQL service running on ${url}`));