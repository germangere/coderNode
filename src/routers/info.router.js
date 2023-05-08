import { Router } from 'express';
import { getInfo } from '../controllers/info.controller.js';

const infoRouter = new Router();

infoRouter.get('/', getInfo);

export default infoRouter;