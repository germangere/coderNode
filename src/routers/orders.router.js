import { Router } from "express";
import { getOrders } from "../controllers/orders.controller.js";

export const ordersRouter = new Router();

ordersRouter.get('/', getOrders)