import config from '../../config/config.js';
import ContenedorMongoDb from '../containers/ContenedorMongoDb.js';
import { userSchema, productSchema, cartSchema, orderSchema, chatSchema } from '../schemas/index.js';

let userDao, productDao, cartDao, orderDao, chatDao;

switch (config.DB) {
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
