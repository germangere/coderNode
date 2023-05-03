import { Router } from "express";
import { delItemFromCart, deleteCart, getCart, orderConfirm, productToCart } from "../controllers/cart.controller.js";

export const cartRouter = new Router();

cartRouter.get('/', getCart)
cartRouter.post('/', productToCart)
cartRouter.delete('/:id', delItemFromCart)
cartRouter.delete('/', deleteCart)
cartRouter.post('/compra', orderConfirm)