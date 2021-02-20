const { ApolloServer } = require('apollo-server');

let _id = 0;

const photos = [];

const typeDefs = `
    type Query {
        totalPhotos: Int!
        allPhotos: [Photo!]!
    }

    type Mutation {
        postPhoto(name: String! description: String): Photo!
    }

    type Photo {
        id: ID!
        name: String!
        url: String!
        description: String
    }
`;

const resolvers = {
    Query: {
        totalPhotos: () => photos.length,
        allPhotos: () => photos
    },
    Mutation: {
        postPhoto: (parent, args) => {
            const created = {
                id: _id++,
                ...args
            };

            photos.push(created);

            return created;
        }
    },
    Photo: {
        url: parent => `http://test.com/photos/${parent.id}.jpg`
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server
    .listen()
    .then(({ url }) => console.log(`GraphQL service running on ${url}`));