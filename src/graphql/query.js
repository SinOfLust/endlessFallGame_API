const services = require('../services')

const isStarted = () => {
    return services.isStarted()
}

const getLevel = () => {
    return services.getLevel()
}

exports.isStarted = isStarted;
exports.getLevel = getLevel;