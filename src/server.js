import express, { urlencoded } from 'express';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import { Server as HttpServer } from 'http';
import config from './config/config.js';
import { authRouter } from './routers/auth.router.js';
import { webRouter } from './routers/web.router.js';
import { productRouter } from './routers/product.router.js';
import { cartRouter } from './routers/cart.router.js';
import { adminAuth, auth } from './controllers/auth.controller.js';
import { ordersRouter } from './routers/orders.router.js';

const app = express();
const httpServer = new HttpServer(app);

export const server = () => {

    app.use(express.json());
    app.use(urlencoded({ extended: true }));
    app.use(express.static('public'))

    app.set('views', process.cwd() + '/src/views');
    app.set('view engine', 'ejs');

    app.use(session({
        store: MongoStore.create({
            mongoUrl: config.mongoRemote.cnxStr,
            mongoOptions: config.mongoRemote.options
        }),
        secret: 'secret',
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 90000
        }
    }));

    app.use(authRouter);
    app.use(webRouter);
    app.use('/productos', productRouter);
    app.use('/carrito', auth, cartRouter);
    app.use('/orders', adminAuth, ordersRouter)

    return {
        listen: port => new Promise((resolve, reject) => {
            const connectedServer = httpServer.listen(port, () => {
                resolve(connectedServer)
            })
            connectedServer.on('error', error => {
                reject(error)
            })
        })
    }

}