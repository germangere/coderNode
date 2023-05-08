import { Router } from "express";
import { getOrders } from "../controllers/orders.controller.js";

const ordersRouter = new Router();

ordersRouter.get('/', getOrders);

export default ordersRouter;
