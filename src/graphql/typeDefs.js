const typeDefs = [`
type Account {
  _id: String
  limit: Int
  products: [String]
}

type Query {
  getSkins: [String]
  getLevel: Int
  account(_id: String): Account
}

type Mutation {
  setLevel(level: Int): Int
}
`]

exports.typeDefs = typeDefs