const { buildSchema } = require("graphql")

/**
 * Our GraphQL schema, contain all the possible query
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