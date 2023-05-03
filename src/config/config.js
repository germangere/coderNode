import dotenv from 'dotenv';
import yargs from 'yargs';
import firebase from '../../firebase.json' assert {type: 'json'};
dotenv.config();

const args = yargs(process.argv.slice(2))
    .alias({ p: 'port', m: 'mode', d: 'database', u: 'user' })
    .default({ port: process.env.PORT, mode: 'FORK', database: 'mongodb', user: 'user' }).argv;


export default {
    mode: args.mode,
    PORT: args.port,
    user: args.user,
    DB: args.database,
    mongoRemote: {
        cnxStr: process.env.MONGO_URL,
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    },
    sqlite3: {
        client: 'sqlite3',
        connection: {
            filename: process.env.SQLITE_FILENAME
        },
        useNullAsDefault: true
    },
    mariaDb: {
        client: 'mysql',
        connection: {
            host: 'localhost',
            port: 3306,
            user: process.env.MARIADB_USER,
            password: process.env.MARIADB_PASS,
            database: process.env.MARIADB_DB
        }
    },
    firebase,
    fileSystem: {
        path: process.env.FILESYSTEM_PATH
    },
    adminEmail: process.env.ADMIN_EMAIL,
    nodemailer: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS
    },
    twilio: {
        sid: process.env.TWILIO_SID,
        token: process.env.TWILIO_TOKEN,
        from: process.env.TWILIO_FROM
    }
}
