import express, { urlencoded } from 'express';
import session from 'express-session';
import { Server as HttpServer } from 'http';
import sessionConfig from './config/session.config.js';
import { authRouter, cartRouter, chatRouter, infoRouter, ordersRouter, productRouter, webRouter } from './routers/index.js';
import { adminAuth, checkJWT } from './middleware/index.js';

const app = express();
export const httpServer = new HttpServer(app);

export const server = () => {
    app.use(express.json());
    app.use(urlencoded({ extended: true }));
    app.use(express.static('public'));

    app.use(session(sessionConfig));

    app.use(authRouter);
    app.use(webRouter);
    app.use('/productos', productRouter);
    app.use('/carrito', checkJWT, cartRouter);
    app.use('/orders', adminAuth, ordersRouter);
    app.use('/chat', checkJWT, chatRouter);
    app.use('/info', infoRouter)
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