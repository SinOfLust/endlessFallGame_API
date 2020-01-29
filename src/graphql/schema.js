const { buildSchema } = require("graphql")

/**
 * Our GraphQL schema, contain all the possible queries
 */

const schema = buildSchema(`
type Document {
    products: [String]
}

type Query {
  getSkins: [String]
  getLevel: Int
  getDatas(products: [String]): Document
}

type Mutation {
  setLevel(level: Int): Int
}
`);

module.exports = schema