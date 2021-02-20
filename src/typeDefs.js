const typeDefs = `
    type Query {
        totalPhotos: Int!
        allPhotos: [Photo!]!
    }

    type Mutation {
        postPhoto(input: PostPhotoInput): Photo!
    }

    type Photo {
        id: ID!
        name: String!
        url: String!
        description: String
        category: PhotoCategory!
        postedBy: User!
    }

    type User {
        githubLogin: ID!
        name: String
        avatar: String
        postedPhotos: [Photo!]!
    }
    
    enum PhotoCategory {
        PORTRAIT
        ACTION
    }

    input PostPhotoInput {
        name: String!
        category: PhotoCategory!
        description: String
    }
`;

module.exports = {
    typeDefs
};