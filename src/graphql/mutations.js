const { setLevelInDB } = require('../services')

const setLevel = ({ level }) => {
    setLevelInDB(level)
    return level
}

exports.setLevel = setLevel;