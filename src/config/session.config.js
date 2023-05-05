import config from './config.js';
import MongoStore from 'connect-mongo';


export default {
    store: MongoStore.create({
        mongoUrl: config.mongoRemote.cnxStr,
        mongoOptions: config.mongoRemote.options
    }),
    secret: config.jwtSecret,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * config.sessionTime
    }
}