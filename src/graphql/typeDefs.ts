import { gql } from 'apollo-server-express';

const typeDefs = gql`
type Account {
  _id: String
  id: String
  account_id: Int
  limit: Int!
  products: [String]
}
enum Category {
  skinsCharacter
  skinsAllie
  skinsTrail
  skinsTheme
  skinsBackground
}

type Query {
  getSkins(category:Category):[String]
  getLevel: Int
  account(_id: String): [Account]
}

type Mutation {
  setLevel(level: Int): Int
}
`
export default typeDefs