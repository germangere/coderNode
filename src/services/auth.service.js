import { singleton } from '../model/daos/Singleton.js';
import { crypt, verify } from '../utils/hash.js';
import { generateToken } from '../utils/jwt.js';
import { sendMail } from '../utils/nodemailer.js';
import { sendWapp } from '../utils/twilio.js';

const DB = singleton.user();

export const userSignup = async (user) => {
    const { email, password, repassword, name, address, age, phone } = user;

    if (password !== repassword) return 'La contraseña repetida no coincide';

    const registeredUser = await DB.listarByEmail(email);
    if (registeredUser) return 'El usuario ya se encuentra registrado';

    const hashPass = await crypt(password);
    const result = await DB.guardar({
        email,
        password: hashPass,
        name,
        address,
        age,
        phone
    });

    await sendMail(result);
    await sendWapp(result);

    const token = generateToken(email);
    return {
        token,
        user: result
    }
}

export const userLogin = async (user) => {
    const { email, password } = user;
    const userExists = await DB.listarByEmail(email);
    if (!userExists) return 'El usuario no existe';

    const passOk = await verify(password, userExists.password);
    if (!passOk) return 'Error en password'

    const token = generateToken(email);
    return {
        token,
        user: userExists
    }
}