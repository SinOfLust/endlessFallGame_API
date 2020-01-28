const { buildSchema } = require("graphql")

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

exports.schema = schema