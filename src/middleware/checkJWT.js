import { verifyToken } from '../utils/jwt.js';

export const checkJWT = (req, res, next) => {
    try {
        const header = req.headers.authorization || '';
        const jwt = header.split(' ').pop();
        const verified = verifyToken(jwt);

        if (verified) {
            req.jwt = verified
            next();
        } else {
            res.status(401).json({ description: 'JWT inválido' })
        }
    } catch (error) {
        res.status(401).json({ description: error })
    }
}