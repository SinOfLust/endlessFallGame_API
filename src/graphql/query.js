const { getLevelFromDB } = require('../services')

const getLevel = () => {
    return getLevelFromDB()
}

exports.getLevel = getLevel;