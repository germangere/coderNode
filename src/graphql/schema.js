import { buildSchema } from "graphql";

export const schema = buildSchema(`

    type User {
        email: String,
        password: String,
        name: String,
        address: String,
        age: Int,
        phone: Int
    }

    type Query {
        getUser(email: String): User,
        getUsers: [User]
    }
`)