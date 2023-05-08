import { singleton } from '../model/daos/Singleton.js';

const DB = singleton.order();

export const getOrders = async (req, res) => {
    const orders = await DB.listarAll();
    res.json(orders);
}