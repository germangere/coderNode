import config from '../../config/config.js';
import ContenedorArchivo from '../containers/ContenedorArchivo.js';
import ContenedorFirebase from '../containers/ContenedorFirebase.js';
import ContenedorMongoDb from '../containers/ContenedorMongoDb.js';
import ContenedorMemoria from '../containers/ContenedorMemoria.js';
import { userSchema, productSchema, cartSchema, orderSchema, chatSchema } from '../schemas/index.js';

let userDao, productDao, cartDao, orderDao, chatDao;

switch (config.DB) {
    case 'file':
        userDao = new ContenedorArchivo('users.json');
        productDao = new ContenedorArchivo('products.json')
        break
    case 'firebase':
        userDao = new ContenedorFirebase('users');
        productDao = new ContenedorFirebase('products');
        cartDao = new ContenedorFirebase('carts');
        orderDao = new ContenedorFirebase('orders');
        chatDao = new ContenedorFirebase('chats');
        break
    case 'mongodb':
        userDao = new ContenedorMongoDb('users', userSchema);
        productDao = new ContenedorMongoDb('products', productSchema);
        cartDao = new ContenedorMongoDb('carts', cartSchema);
        orderDao = new ContenedorMongoDb('orders', orderSchema);
        chatDao = new ContenedorMongoDb('chats', chatSchema);
        break
    default:
        userDao = new ContenedorMongoDb('users', userSchema);
        productDao = new ContenedorMongoDb('products', productSchema);
        cartDao = new ContenedorMongoDb('carts', cartSchema);
        orderDao = new ContenedorMongoDb('orders', orderSchema);
        chatDao = new ContenedorMongoDb('chats', chatSchema);
        break
}

export const getUserDao = () => userDao;
export const getProductDao = () => productDao;
export const getCartDao = () => cartDao;
export const getOrderDao = () => orderDao;
export const getChatDao = () => chatDao;
