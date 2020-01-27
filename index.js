const express = require('express');
const graphqlHTTP = require('express-graphql');
const services = require('./src/services')
const graphqlSchema = require('./src/graphql/schema')
const root = require('./src/graphql/root')

services.update('started', true)

const app = express();

app.use('/graphql', graphqlHTTP({
  schema: graphqlSchema.schema,
  rootValue: root.root,
  graphiql: true,
}));

app.listen(4000);