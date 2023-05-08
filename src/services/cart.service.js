import { singleton } from '../model/daos/Singleton.js';

const DB = singleton.cart();

export const saveProductToCart = async (email, product) => {

    try {

        const cart = await DB.listarByEmail(email);

        //compruebo si tiene el usuario tiene un carrito activo
        //para seguir sumando productos o crear uno nuevo

        if (cart) {

            const prodExist = cart.products.findIndex(p => p._id === product._id);

            //compruebo si ya tiene el producto agregado al carrito.
            //En caso que sí, le sumo la cantidad seleccionada

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

            return await DB.actualizar(cart._id, toSave);

        } else {

            const toSave = {
                email,
                products: [product],
                total: product.quantity * product.price
            }

            return await DB.guardar(toSave);
        }

    } catch (error) {
        return {
            error: 'Error al cargar producto al carrito',
            description: error
        }
    }

}

export const deleteItem = async (email, id) => {

    try {

        const cart = await DB.listarByEmail(email);
        const index = cart.products.findIndex(p => p._id === id);

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

            return {
                error: 'Error al eliminar producto del carrito',
                description: 'Elemento no encontrado'
            }

        }

    } catch (error) {
        return {
            error: 'Error al eliminar producto del carrito',
            description: error
        }
    }


}