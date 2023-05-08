import dotenv from 'dotenv';
import yargs from 'yargs';

dotenv.config();

const args = yargs(process.argv.slice(2))
    .alias({ p: 'port', m: 'mode', d: 'database', u: 'user', s: 'sessionTime' })
    .default({ port: process.env.PORT, mode: 'FORK', database: 'mongodb', user: 'user', sessionTime: 15 }).argv;


export default {
    mode: args.mode,
    PORT: args.port,
    user: args.user,
    DB: args.database,
    sessionTime: args.sessionTime,
    jwtSecret: process.env.JWT_SECRET,
    adminEmail: process.env.ADMIN_EMAIL,

    mongoRemote: {
        cnxStr: process.env.MONGO_URL,
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    },

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
