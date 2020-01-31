// Load env vars
// tslint:disable-next-line: no-var-requires
require('dotenv').config();
import express from 'express';
import resolvers from './src/graphql/resolvers';
import typeDefs from './src/graphql/typeDefs';
import { ApolloServer } from 'apollo-server-express'
import cors from 'cors';
import{red, yellow} from 'colors'

process.on('unhandledRejection', (err: { message: string }, promise) => {
    // tslint:disable-next-line: no-console
    console.log(red(`Error: ${err.message}`));
});

const app = express(); // our main app
app.use(cors()) // enable cross origin ressource sharing
app.use(express.static('public')); // set public directory to static

const server = new ApolloServer({ // Apollo server for queries
    typeDefs, resolvers
})

server.applyMiddleware({ app }); // connect our express app with the apollo server

app.listen(process.env.PORT, () => {
    // tslint:disable-next-line: no-console
    console.log(yellow(`Server running in ${process.env.NODE_ENV} mode on port: ${process.env.PORT}`) )
}); // listen to port 4000