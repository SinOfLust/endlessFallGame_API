const express = require('express');
const graphqlHTTP = require('express-graphql'); // graphql module for express
const { schema } = require('./src/graphql/schema'); // all of my graphQL schema
const { root } = require('./src/graphql/root'); // GraphQL root pattern
const port = process.env.PORT || 4000;
const app = express(); // app

// GraphQL
app.use(
  '/graphql',
  graphqlHTTP({
    // GraphQL endpoint
    schema: schema, // with our schema
    rootValue: root, // our root pattern
    graphiql: true // enable graphiQL GUI
  })
);

// Server
app.listen(port, () => console.log(`Server listening on port: ${port}`));
