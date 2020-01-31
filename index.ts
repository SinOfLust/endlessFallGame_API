require('dotenv').config();

const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const resolvers  = require('./src/graphql/resolvers')
const typeDefs = require('./src/graphql/typeDefs')
const cors = require('cors');

process.on('unhandledRejection', (err: {message: string}, promise) => {
    console.log(`Error: ${err.message}`);
});

const app = express(); // our main app
app.use(cors()) // enable cross origin ressource sharing
app.use(express.static('public')); // set public directory to static 

const server = new ApolloServer({ // Apollo server for queries
    typeDefs, resolvers
})

server.applyMiddleware({ app }); // connect our express app with the apollo server


app.listen(process.env.PORT); // listen to port 4000