const { users, photos, _id } = require('./data');

const resolvers = {
    Query: {
        totalPhotos: (parent, args, context) => photos.length,
        allPhotos: (parent, args, context) => photos
    },
    Mutation: {
        postPhoto: (parent, args, context) => {
            if (!context.currentUser.isLogin) {
                return false;
            }

            const created = {
                id: _id++,
                ...args.input
            };

            photos.push(created);

            return created;
        }
    },
    Photo: {
        url: (parent, args, context) => `http://test.com/photos/${parent.id}.jpg`,
        postedBy: (parent, args, context) => users.find(u => u.githubLogin === parent.githubUser)
    },
    User: {
        postedPhotos: (parent, args, context) => photos.filter(p => p.githubUser === parent.githubLogin)
    }
};

module.exports = {
    resolvers
};