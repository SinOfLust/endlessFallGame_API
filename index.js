// Load env vars
require('dotenv').config();
// Colors
require('colors');

const express = require('express');
const graphqlHTTP = require('express-graphql'); // graphql module for express
const schema = require('./src/graphql/schema'); // all of my graphQL schema
const root = require('./src/graphql/root'); // GraphQL root pattern
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

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // close server & exit process
  server.close(() => process.exit(1));
});

const server = app.listen(port, () =>
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port: ${port}`.yellow
      .bold
  )
);
