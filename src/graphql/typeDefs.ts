import { gql } from 'apollo-server-express';

const typeDefs = gql`
type Account {
  _id: String
  id: String
  account_id: Int
  limit: Int!
  products: [String]
}
enum Folders {
  skinsCharacter
}
type Query {
  getSkins(category: Folders): [String]
  getLevel: Int
  getAccounts(_id: String): [Account]
}

type Mutation {
  levelUp(level: Int): Int
}
`
export default typeDefs