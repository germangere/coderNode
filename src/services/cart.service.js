import { singleton } from "../model/daos/Singleton.js";

const DB = singleton.cart();

export const saveProductToCart = async (email, product) => {
    const cart = await DB.listarByEmail(email);
    if (cart) {

        const prodExist = cart.products.findIndex(p => p._id === product._id)

        if (prodExist !== -1) {
            cart.products[prodExist].quantity += product.quantity;
        } else {
            cart.products.push(product);
        }

        let total = 0;
        cart.products.forEach(prod => total += prod.price * prod.quantity);

        const toSave = {
            email,
            products: cart.products,
            total
        }

        return await DB.actualizar(cart._id, toSave)

    } else {

        const toSave = {
            email,
            products: [product],
            total: product.quantity * product.price
        }

        return await DB.guardar(toSave);
    }
}

export const deleteItem = async (email, id) => {
    const cart = await DB.listarByEmail(email);
    const index = cart.products.findIndex(p => p._id === id)

    if (index !== -1) {

        cart.products.splice(index, 1);

        let total = 0;
        cart.products.forEach(prod => total += prod.price * prod.quantity);

        const toSave = {
            email,
            products: cart.products,
            total
        }

        return await DB.actualizar(cart._id, toSave);

    } else {

        return { error: 'Elemento no encontrado' }

    }

}