import { verifyToken } from '../utils/token.utils.js';  


const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization'];
    if (verifyToken(token)) {
        next();
    } else {
        res.status(401).json({ message: 'Unauthorized: Invalid or missing token' });
    }
};


export default authMiddleware;