const { buildSchema } = require("graphql")
const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLSchema,
  GraphQLID,
  GraphQLFloat,
  GraphQLList,
  GraphQLNonNull,
  GraphQLInt
} = graphql;
/**
 * Our GraphQL schema, contain all the possible queries
 */

const schema = buildSchema(`
type File {
    filename: String!
    URL: String
}

type Query {
  getSkins: [String]
  getLevel: Int
}

type Mutation {
  setLevel(level: Int): Int
}
`);

module.exports = schema