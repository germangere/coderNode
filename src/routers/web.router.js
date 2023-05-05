import { Router } from 'express';
import { getHome } from '../controllers/web.controller.js';
import { checkJWT } from '../middleware/checkJWT.js';
import { auth } from '../middleware/auth.js';

export const webRouter = new Router();

webRouter.get('/', auth, getHome);
webRouter.get('/home', auth, getHome);