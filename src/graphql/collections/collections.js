const mongo = require('mongoose');
const Schema = mongo.Schema;

const accounts = new Schema({
    limit: Number,
    products: [String],
    account_id: Number
})

const objectAccounts = accounts.set('toObject', { virtuals: true })
const collection = mongo.model('accounts', objectAccounts, 'accounts')
module.exports = collection