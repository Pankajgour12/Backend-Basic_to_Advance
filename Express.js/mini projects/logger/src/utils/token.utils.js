import crypto from 'crypto';

export const generateToken = () => {
    return crypto.randomBytes(16).toString('hex');
}


export const verifyToken = (token) => {
    // In real scenarios, you would verify the token properly
    return token && token.length === 32;
}

