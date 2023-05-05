import config from '../config/config.js';

export const auth = (req, res, next) => {
    if (req.session?.user?.email) {
        next();
    } else {
        res.redirect('/login');
    }
}

export const adminAuth = (req, res, next) => {
    if (config.user === 'admin') {
        next();
    } else {
        return res.status(401).json({ description: 'No autorizado' });
    }
}