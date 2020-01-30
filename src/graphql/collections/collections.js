const mongo = require('mongoose');
const Schema = mongo.Schema;

const accounts = new Schema({
    limit: Number
})
const objectAccounts = accounts.set('toObject', { virtuals: true })
const collection = mongo.model('accounts', objectAccounts, 'accounts')
module.exports = collection