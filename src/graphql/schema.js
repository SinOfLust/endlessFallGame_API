const { makeExecutableSchema } = require('graphql-tools')
const { resolvers } = require('./resolvers')
const { typeDefs } = require('./typeDefs')
/**
 * Our GraphQL schema, contain all the possible queries
 */
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

module.exports = schema