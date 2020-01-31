import mongoose, { Schema } from 'mongoose';

const accountsSchema = new Schema({
    limit: Number,
    products: [String],
    account_id: Number,
}).set('toObject', { virtuals: true })

export const accountModel: mongoose.Model<mongoose.Document, {}> = mongoose.model('accounts', accountsSchema, 'accounts');

export interface AccountInterface extends mongoose.Document {
    limit: number,
    products: [string],
    account_id: number
  }
