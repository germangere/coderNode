import pkg from "jsonwebtoken";
import { verify } from "jsonwebtoken";
import config from "../config/config.js";
const { sign } = pkg;

export const generateToken = (email) => {
    const jwt = sign({ email }, config.jwtSecret, {
        expiresIn: config.sessionTime * 60,
    });
    return jwt;
};

export const verifyToken = (jwt) => {
    const result = verify(jwt, config.jwtSecret);
    return result;
};