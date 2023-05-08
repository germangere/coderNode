import { Router } from "express";
import { getLogin, getLogout, getSignup, postLogin, postSignup } from "../controllers/auth.controller.js";

const authRouter = new Router();

authRouter.get('/login', getLogin);
authRouter.post('/login', postLogin);
authRouter.get('/signup', getSignup);
authRouter.post('/signup', postSignup);
authRouter.get('/logout', getLogout);

export default authRouter;