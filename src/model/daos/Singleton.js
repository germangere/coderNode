import { getUserDao, getProductDao, getCartDao, getOrderDao } from "./Factory.js";

let instance = {
    user: null,
    product: null,
    cart: null,
    order: null
}

export const singleton = {
    user: () => {
        if (!instance.user) instance.user = getUserDao();
        return instance.user;
    },
    product: () => {
        if (!instance.product) instance.product = getProductDao();
        return instance.product;
    },
    cart: () => {
        if (!instance.cart) instance.cart = getCartDao();
        return instance.cart;
    },
    order: () => {
        if (!instance.order) instance.order = getOrderDao();
        return instance.order;
    }
}