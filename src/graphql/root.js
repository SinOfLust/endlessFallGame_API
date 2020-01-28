const query = require('./query')
const mutation = require('./mutations')
// The root provides a resolver function for each API endpoint
const root = {
    isStarted: query.isStarted,
    getLevel: query.getLevel,
    setLevel: mutation.setLevel
};

exports.root = root
