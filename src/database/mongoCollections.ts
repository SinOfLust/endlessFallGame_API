const mongo = require('mongoose');
const Schema = mongo.Schema;

const accountsSchema = new Schema({
    limit: Number,
    products: [String],
    account_id: Number
}).set('toObject', { virtuals: true })

const accountModel = mongo.model('accounts', accountsSchema, 'accounts')

module.exports.accountsModel = accountModel