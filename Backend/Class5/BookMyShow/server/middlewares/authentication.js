import jwt from 'jsonwebtoken';

const isLoggedIn = (req, res, next) => {
    const { token } = req.cookies;
    const tokenDetails = jwt.verify(token, process.env.JWT_PASSWORD);
    console.log('tokenDetails', tokenDetails);
    if (!token || !tokenDetails) {
        res.status(401).send('Login is required!');
        return;
    }
    req.user = tokenDetails;
    next();
}

export default isLoggedIn;

