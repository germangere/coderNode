import config from "../config/config.js";
import { userLogin, userSignup } from "../services/auth.service.js";

export const auth = (req, res, next) => {
    if (req.session?.email) {
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

export const getLogin = (req, res) => {
    if (req.session?.email) {
        res.redirect('/productos');
    } else {
        res.sendFile(process.cwd() + '/src/views/login.html');
    }
}

export const postLogin = async (req, res) => {
    const result = await userLogin(req.body);
    if (result) {
        req.session.email = req.body.email
        res.redirect('/productos');
    } else {
        res.render('faillogin')
    }
}

export const getSignup = (req, res) => {
    res.sendFile(process.cwd() + '/src/views/signup.html');
}

export const postSignup = async (req, res) => {
    const result = await userSignup(req.body);
    if (result) {
        req.session.email = result.email;
        res.redirect('/productos');
    } else {
        res.render('failsignup', { email: req.body.email });
    }
}

export const getLogout = (req, res) => {
    res.render('logout', { nombre: req.session.email });
    req.session.destroy();
}