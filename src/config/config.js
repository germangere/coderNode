import dotenv from 'dotenv';
import yargs from 'yargs';
dotenv.config();

const args = yargs(process.argv.slice(2))
    .alias({ p: 'port', m: 'mode', d: 'database' })
    .default({ port: process.env.PORT, mode: 'FORK', database: 'mongodb' }).argv;


export default {
    mode: args.mode,
    PORT: args.port,
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
    firebase: {
        "type": "service_account",
        "project_id": "codernode-1dd52",
        "private_key_id": "29670ac89691a00110ec7d7dcf13afc4b62d1e86",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC3RLVVTG2wg81g\n76qpD41623CpVPRQi4d/Cc2k0bdwEJmT2HM3LWLfZxZz7KYkBt8eeOHvIBa4T1z8\n5mTJ+HKB59Iw/x+K6r8sUZcGafKLmqoMLS7hAuRv5VZ8m6ZgG8vKE2brDjM+RVk0\nZYkto67HpGpgI8aaDEtzo/fxW1QqNq0kNzLFCFeucMV+u16EOFgdbLrBq+svjtH6\nB/2aZFSVQg/3Al9kI14Y7/1peHS0E47lO2qzmPvk8oh41Cl3kyzJpCuQxBrMv4BV\n21iq1Y5nZ4C6srFp0e5wiEZCb6KZwSqo1Kj2kkZLes98FxtXxrpyotiKRb8BpxD+\nK97anxMpAgMBAAECggEAFinOYqyJouRLov6U9VlSxzHwzd+e5Ls9BYdkWdt9W0V8\npzEw3NJFr+X+BIKw5HA6zSr6CtLHAJ7jbFe6BmVgBrcH98IwuLpzKGtND/rh2NF5\nYVvY/J/+i4wxAYSK0jpmUq+2PXS0DIKzOyeQ14bBITZwYWRONSzJtqhUmLkOZITP\nwJM0V7k+WsPqSFccxhEW625Ty+HymaTBfHrgdSEtSE0IHCbzL/fKOgrleHX0Rd+w\nBesa2RZOFUYTXfk88WwnrT0xyVJda3+AEg8RTO9MGhdVqWQLnAEwtTcp1mHK8xRY\nlX85cM1A0boxXAP7TQeZSGxZ6wIw93wD6a1E75oooQKBgQDytQaHW01O5LRJwShr\nv4Z0w9Y0YCgA7gxNDHgVgShPdy/Q9n7sT/KwHpnAjh37qblMNIxjHX6RXEQx3Hyl\n5vs7AHfw2k0JReAlXOE487xKy/okaza0hbiJKGeA5XWiI9XngMUhJV5lcwBLORIq\nnH3HhN6LjpdPz1EN5Zzvqk3jIQKBgQDBTkw2V8n+sqxYAhYZl285ieCEfh4Nd+Vk\n8nXGD9reGnznkC7ooFZ7Fgrhdrhh5Q8jLHyRZsUuqrRI/Ilrql2yHgeg1Wl3XbNE\nbNBEapaXkkGGY/bPSRF8wD6t51SmYh4Qvq3YJ765q4c+g8MlhJmKSYgZHQck1OZf\nnSlLNVY3CQKBgQDeNJBaomOgBFFvaRG5vCq8goN9hj95wneunujeP1aJkoRLmzHO\n5s85IXsAyNx4iQYl18JkCB/Vs5SX1dalCVkfxqkI8MQw5jF145grzTKphCBq8WGv\nWvH9WOmSIAJXxNlUzxcr5ouK9APj2sdgDdA2N9aMDKtJnXQG9h59af1PIQKBgA7k\nclipcMVvjHmHR56XHRmItsReVwBgoUqip1In/Iup7L+GSybe22rGKvZtyAy6seza\ny4oEKeLLgfIxioDB8k/7okjQyDxK+rmlzHHI6Gsq+GNbJjOYBIHg6bNKJCphWsGd\nfxUtErOJNHUrf4hPa+jMe3C73MYIpOru17SUmlzJAoGBAIp0VSHC2IHhtFBq4Jib\nJEHPxib5FHnHDa0ho+wuepXJpYMP53ch0YCPtIaBE7+bBburRa0XW/R4FAE12xSe\n855PJL76+Q1WtNXa4rMKRtghChtN9oCykbAlOvm4H3ZyPUljFBpF98F1Skk1l4Ra\n3Ag7/4fkyRHHp3u/+bmvVW9x\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-tgbf4@codernode-1dd52.iam.gserviceaccount.com",
        "client_id": "117409242203855354068",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-tgbf4%40codernode-1dd52.iam.gserviceaccount.com"
    },
    fileSystem: {
        path: process.env.FILESYSTEM_PATH
    },
    adminEmail: 'germangere@gmail.com',
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
