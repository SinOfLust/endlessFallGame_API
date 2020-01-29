const mongo = require('mongoose');
const Schema = mongo.Schema;

const accounts = new Schema({
    limit: Number
});

module.exports = mongo.model('accounts', accounts, 'accounts');