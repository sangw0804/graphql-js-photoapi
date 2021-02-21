const authenticate = (req) => {
    // 인증...
    return { id: "sangw0804", isLogin: true };
};

const connectDB = () => {
    // DB 연결...
    return { isConnected: true };
};

const context = ({ req }) => {
    const currentUser = authenticate(req);
    const db = connectDB();

    return { currentUser, db };
};

module.exports = { context };