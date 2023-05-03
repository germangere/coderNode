import { Router } from "express";
import { adminAuth, auth } from "../controllers/auth.controller.js";
import { deleteProduct, getCategory, getProduct, getProducts, postProduct, putProduct } from "../controllers/products.controller.js";

export const productRouter = new Router();

productRouter.get('/', auth, getProducts);
productRouter.get('/id/:id', auth, getProduct);
productRouter.get('/:categoria', auth, getCategory);
productRouter.post('/', adminAuth, postProduct);
productRouter.put('/:id', adminAuth, putProduct);
productRouter.delete('/:id', adminAuth, deleteProduct);