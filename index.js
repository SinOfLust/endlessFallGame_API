const express = require('express');
const graphqlHTTP = require('express-graphql');
const { schema } = require('./src/graphql/schema')
const { root } = require('./src/graphql/root')

const app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(4000);