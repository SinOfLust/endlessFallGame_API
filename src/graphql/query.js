const { getLevelFromDB, getSkinsFromDB } = require('./resolvers')

// GraphQL query to get level from DB ( here's a JSON file)
const getLevel = () => {
    return getLevelFromDB()
}

// GraphQL query to get skins from DB (here's its from public dir)
const getSkins = () => {
    return getSkinsFromDB()
}

exports.getLevel = getLevel;
exports.getSkins = getSkins;