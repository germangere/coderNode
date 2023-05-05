import { singleton } from "../model/daos/Singleton.js"
import { deleteItem, saveProductToCart } from "../services/cart.service.js";

const DB = singleton.cart();
const DbOrder = singleton.order();

export const getCart = async (req, res) => {
    const exist = await DB.listarByEmail(req.session.user.email);
    res.json(exist ?? {});
}

export const productToCart = async (req, res) => {
    const { email } = req.session.user;
    const { product } = req.body;
    const savedCart = await saveProductToCart(email, product);
    res.json(savedCart);
}

export const delItemFromCart = async (req, res) => {
    const result = await deleteItem(req.session.user.email, req.params.id);
    res.json(result);
}

export const deleteCart = async (req, res) => {
    const cart = await DB.listarByEmail(req.session.user.email);
    const result = await DB.borrar(cart._id);
    res.json(result)
}

export const orderConfirm = async (req, res) => {
    const { email } = req.session.user;
    const cart = await DB.listarByEmail(email);
    const ordersQuantity = await DbOrder.listarAll();
    const orderNumber = ordersQuantity.length + 1;
    const toSave = {
        email,
        products: cart.products,
        total: cart.total,
        orderNumber
    }
    const result = await DbOrder.guardar(toSave);
    await DB.borrar(cart._id)
    res.json(result)
}