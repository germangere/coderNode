import { userSingleton } from '../model/daos/userSingleton.js';
import { crypt, verify } from './hash.service.js';
import { sendMail } from './nodemailer.service.js';
import { sendWapp } from './twilio.service.js';

const DB = userSingleton();

export const userSignup = async (user) => {
    const { email, password, name, address, age, phone } = user;

    const registeredUser = await DB.listarByEmail(email);
    if (registeredUser) return false;

    const hashPass = await crypt(password);
    const result = await DB.guardar({
        email,
        password: hashPass,
        name,
        address,
        age,
        phone
    });

    // await sendMail(result);
    // await sendWapp(result);

    return result;
}

export const userLogin = async (user) => {
    const { email, password } = user;
    const userExists = await DB.listarByEmail(email);
    if (userExists) {
        const passOk = await verify(password, userExists.password);
        return passOk
    } else {
        return false
    }
}