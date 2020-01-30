const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { resolvers } = require('./src/graphql/resolvers')
const { typeDefs } = require('./src/graphql/typeDefs')
const cors = require('cors');

const app = express(); // our app
const PORT = 4000;
app.use(cors())
app.use(express.static('public')); // set public directory to static 

const server = new ApolloServer({
    typeDefs, resolvers
});

server.applyMiddleware({ app });


app.listen(PORT); // listen to port 4000