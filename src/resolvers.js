const { users, photos, _id } = require('./data');

const resolvers = {
    Query: {
        totalPhotos: () => photos.length,
        allPhotos: () => photos
    },
    Mutation: {
        postPhoto: (parent, args) => {
            const created = {
                id: _id++,
                ...args.input
            };

            photos.push(created);

            return created;
        }
    },
    Photo: {
        url: parent => `http://test.com/photos/${parent.id}.jpg`
    }
};

module.exports = {
    resolvers
};