let _id = 4;

const users = [
    {
        githubLogin: 'mHattrup',
        name: 'Mike Hattrup'
    },
    {
        githubLogin: 'gPlake',
        name: 'Glen Plake'
    },
{
        githubLogin: 'sSchmidt',
        name: 'Scot Schmidt'
    }
];

const photos = [
    {
        id: '1',
        name: 'Dropping the Heart Chute',
        description: 'amazing',
        category: 'ACTION',
        githubUser: 'gPlake'
    },
    {
        id: '2',
        name: 'Enjoying the sunshine',
        description: 'amazing',
        category: 'PORTRAIT',
        githubUser: 'sSchmidt'
    },
    {
        id: '3',
        name: 'Gunbarrel 25',
        description: 'amazing',
        category: 'ACTION',
        githubUser: 'sSchmidt'
    }
];

module.exports = {
    users,
    photos,
    _id
}