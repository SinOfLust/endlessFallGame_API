const query = require('./queries')
const mutation = require('./mutations')

const resolvers = {
    Query: query,
    Mutation: mutation
}

module.exports = resolvers