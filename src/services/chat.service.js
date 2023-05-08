import { Server } from 'socket.io';
import { httpServer } from '../server.js';
import { singleton } from '../model/daos/Singleton.js';

const DB = singleton.chat();

export const chatService = async (user) => {
    const io = new Server(httpServer);

    io.on('connection', async (socket) => {
        const oldMsgs = await DB.listarAllByEmail(user.email);
        oldMsgs.sort((a, b) => a.createdAt - b.createdAt);
        if (oldMsgs) {
            socket.emit('messages', oldMsgs);
        } else {
            socket.emit('messages', { message: `hola ${user.name}! bienvenido al chat!` });
        }
        socket.on('message', async message => {
            const toSave = {
                email: user.email,
                type: 'usuario',
                message: message.message
            }
            await DB.guardar(toSave);
            const getMsgs = await DB.listarAllByEmail(user.email);
            getMsgs.sort((a, b) => a.createdAt - b.createdAt);
            socket.emit('messages', getMsgs);
        }
        )
    })

}