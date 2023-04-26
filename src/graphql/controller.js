import ContenedorMongoDb from "../containers/ContenedorMongoDb.js";
import userSchema from "../model/schemas/user.schema.js";

const DB = new ContenedorMongoDb('usuarios', userSchema)

export const getUser = async (email) => {
    return await DB.listarByEmail(Object.values(email)[0]);
}

export const getUsers = async () => {
    return await DB.listarAll();
}