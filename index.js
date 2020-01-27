const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
const services = require('./src/services')

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    isStarted: Boolean
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  // hello: () => {
  //   return 'Hello world!';
  // },
  isStarted: () => {
    return services.isStarted()
  }
};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);