import { getUserDao } from "./userFactory.js";

let instance = null;

export const userSingleton = () => {
    if (!instance) {
        instance = getUserDao();
    }
    return instance;
}