const { getLevel, getSkins } = require('./query')
const { setLevel } = require('./mutations')

// The root provides a resolver function for each API endpoint
const root = {
    getLevel: getLevel,
    getSkins: getSkins,
    setLevel: setLevel
};

module.exports = root
