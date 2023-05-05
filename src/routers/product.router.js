import { Router } from 'express';
import { adminAuth } from '../middleware/auth.js';
import { deleteProduct, getCategory, getProduct, getProducts, postProduct, putProduct } from '../controllers/products.controller.js';

export const productRouter = new Router();

productRouter.get('/', getProducts);
productRouter.get('/id/:id', getProduct);
productRouter.get('/:categoria', getCategory);
productRouter.post('/', adminAuth, postProduct);
productRouter.put('/:id', adminAuth, putProduct);
productRouter.delete('/:id', adminAuth, deleteProduct);