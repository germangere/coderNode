import express, { urlencoded } from 'express';
import session from 'express-session';
import { Server as HttpServer } from 'http';
import sessionConfig from './config/session.config.js';
import { authRouter } from './routers/auth.router.js';
import { webRouter } from './routers/web.router.js';
import { productRouter } from './routers/product.router.js';
import { cartRouter } from './routers/cart.router.js';
import { adminAuth } from './middleware/auth.js';
import { ordersRouter } from './routers/orders.router.js';
import { checkJWT } from './middleware/checkJWT.js';

const app = express();
const httpServer = new HttpServer(app);

export const server = () => {
    app.use(express.json());
    app.use(urlencoded({ extended: true }));

    app.use(session(sessionConfig));

    app.use(authRouter);
    app.use(webRouter);
    app.use('/productos', productRouter);
    app.use('/carrito', checkJWT, cartRouter);
    app.use('/orders', adminAuth, ordersRouter);
    app.use('*', (req, res) => {
        res.redirect('/')
    })

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