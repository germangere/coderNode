import { userLogin, userSignup } from '../services/auth.service.js';


export const getLogin = (req, res) => {
    if (req.session?.user?.email) {
        res.redirect('/productos');
    } else {
        res.send('Estamos en formulario de login');
    }
}

export const postLogin = async (req, res) => {
    const result = await userLogin(req.body);
    if (typeof (result) === 'string') {
        res.send(result);
    } else {
        req.session.user = result.user;
        res.send(result);
    }
}

export const getSignup = (req, res) => {
    res.send('Estamos en formulario de signup');
}

export const postSignup = async (req, res) => {
    const result = await userSignup(req.body);
    if (typeof (result) === 'string') {
        res.send(result);
    } else {
        req.session.user = result.user;
        res.send(result);
    }
}

export const getLogout = (req, res) => {
    if (req.session?.user) {
        res.send(`Hasta luego ${req.session.user.name}`);
        req.session.destroy();
    } else {
        res.send('No estás logueado!');
    }
}