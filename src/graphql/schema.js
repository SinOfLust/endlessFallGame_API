const { buildSchema } = require("graphql")


const schema = buildSchema(`
type Query {
  isStarted: Boolean
  getLevel: Int
}

type Mutation {
  setLevel(level: Int): Int
}
`);

exports.schema = schema