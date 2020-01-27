const express = require('express');
const graphqlHTTP = require('express-graphql');
const services = require('./src/services')
const graphqlSchema = require('./src/graphql/schema')
// The root provides a resolver function for each API endpoint
const root = {
  isStarted: () => {
    return services.isStarted()
  },
  getLevel: () => {
    return services.getLevel()
  },
  setLevel: ({level}) => {
    services.setLevel(level)
    return level
  }
};

services.update('started', true)
services.update('level', 1)
const app = express();

app.use('/graphql', graphqlHTTP({
  schema: graphqlSchema.schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(4000);