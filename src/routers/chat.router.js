import { Router } from 'express';
import { getChat, getOwnChat } from '../controllers/chat.controller.js';

const chatRouter = new Router();

chatRouter.get('/', getChat);
chatRouter.get('/:email', getOwnChat);

export default chatRouter;
