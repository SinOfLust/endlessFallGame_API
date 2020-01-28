const { getLevelFromDB, getSkinsFromDB } = require('../services')

const getLevel = () => {
    return getLevelFromDB()
}

const getSkins = () => {
    return getSkinsFromDB()
}

exports.getLevel = getLevel;
exports.getSkins = getSkins;