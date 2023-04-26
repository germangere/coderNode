import config from '../../config/config.js';
import ContenedorArchivo from '../../containers/ContenedorArchivo.js';
import ContenedorFirebase from '../../containers/ContenedorFirebase.js';
import ContenedorMongoDb from '../../containers/ContenedorMongoDb.js';
import ContenedorMemoria from '../../containers/ContenedorMemoria.js';
import userSchema from '../schemas/user.schema.js';

let userDao

switch (config.DB) {
    case 'file':
        userDao = new ContenedorArchivo('users.json');
        break
    case 'firebase':
        userDao = new ContenedorFirebase('users');
        break
    case 'mongodb':
        userDao = new ContenedorMongoDb('usuarios', userSchema);
        break
    case 'memory':
        userDao = new ContenedorMemoria();
        break
}

export const getUserDao = () => userDao;