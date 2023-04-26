import { Router } from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './schema.js';
import { getUser, getUsers } from './controller.js';

export const graphql = new Router();

graphql.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: {
        getUser,
        getUsers
    },
    graphiql: true
}))