import { getUserDao, getProductDao } from "./Factory.js";

let instance = {
    user: null,
    product: null
}

export const singleton = {
    user: () => {
        if (!instance.user) instance.user = getUserDao();
        return instance.user;
    },
    product: () => {
        if (!instance.product) instance.product = getProductDao();
        return instance.product;
    }
}