import config from '../../config/config.js';
import ContenedorArchivo from '../containers/ContenedorArchivo.js';
import ContenedorFirebase from '../containers/ContenedorFirebase.js';
import ContenedorMongoDb from '../containers/ContenedorMongoDb.js';
import ContenedorMemoria from '../containers/ContenedorMemoria.js';
import userSchema from '../schemas/user.schema.js';
import productSchema from '../schemas/product.schema.js';
import cartSchema from '../schemas/cart.schema.js';
import orderSchema from '../schemas/order.schema.js';

let userDao, productDao, cartDao, orderDao;

switch (config.DB) {
    case 'file':
        userDao = new ContenedorArchivo('users.json');
        productDao = new ContenedorArchivo('products.json')
        break
    case 'firebase':
        userDao = new ContenedorFirebase('users');
        productDao = new ContenedorFirebase('products');
        break
    case 'mongodb':
        userDao = new ContenedorMongoDb('users', userSchema);
        productDao = new ContenedorMongoDb('products', productSchema);
        cartDao = new ContenedorMongoDb('carts', cartSchema)
        orderDao = new ContenedorMongoDb('orders', orderSchema)
        break
    case 'memory':
        userDao = new ContenedorMemoria();
        productDao = new ContenedorMemoria();
        break
    default:
        userDao = new ContenedorMongoDb('users', userSchema);
        productDao = new ContenedorMongoDb('products', productSchema);
        break
}

export const getUserDao = () => userDao;
export const getProductDao = () => productDao;
export const getCartDao = () => cartDao;
export const getOrderDao = () => orderDao;
