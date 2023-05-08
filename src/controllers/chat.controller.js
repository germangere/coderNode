import { singleton } from "../model/daos/Singleton.js";
import { chatService } from "../services/chat.service.js";

const DB = singleton.chat();

export const getChat = async (req, res) => {
    chatService(req.session.user);
}

export const getOwnChat = async (req, res) => {
    const { email } = req.params;
    const chats = await DB.listarAllByEmail(email);
    const userMsgs = chats.filter(msg => msg.type === 'usuario')
    res.send(userMsgs);
}