const { setLevelInDB } = require('./resolvers')

// GraphQL mutation to set level in DB ( here's a JSON file )
const setLevel = ({ level }) => {
    setLevelInDB(level)
    return level
}

exports.setLevel = setLevel;