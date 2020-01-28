const express = require('express'); // express framework
const graphqlHTTP = require('express-graphql'); // graphql module for express
const { schema } = require('./src/graphql/schema') // all of my graphQL schema
const { root } = require('./src/graphql/root') // GraphQL root pattern

const app = express(); // our app

app.use('/graphql', graphqlHTTP({ // GraphQL endpoint
  schema: schema, // with our schema
  rootValue: root, // our root pattern
  graphiql: true, // enable graphiQL GUI
}));

app.use(express.static('public')); // set public directory to static 

app.listen(4000); // listen to port 4000