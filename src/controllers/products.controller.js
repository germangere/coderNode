import { singleton } from "../model/daos/Singleton.js"

const DB = singleton.product();

export const getProducts = async (req, res) => {
    const products = await DB.listarAll();
    res.json(products);
}

export const getProduct = async (req, res) => {
    const product = await DB.listar(req.params.id);
    Array.isArray(product) && product.length !== 0
        ? res.json(product)
        : res.send('Producto no existente')
}

export const getCategory = async (req, res) => {
    const prodsByCategory = await DB.listarByCategory(req.params.categoria);
    res.json(prodsByCategory);
}

export const postProduct = async (req, res) => {
    const savedProduct = await DB.guardar(req.body);
    res.json(savedProduct);
}

export const putProduct = async (req, res) => {
    const modProd = await DB.actualizar(req.params.id, req.body);
    res.json(modProd)
}

export const deleteProduct = async (req, res) => {
    const deletedProduct = await DB.borrar(req.params.id);
    res.json(deletedProduct);
}