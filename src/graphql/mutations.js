const services = require('../services')

const setLevel = ({ level }) => {
    services.setLevel(level)
    return level
}

exports.setLevel = setLevel;