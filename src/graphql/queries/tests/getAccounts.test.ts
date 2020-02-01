
import { accountModel } from "../../../database/accountsCollection";
import mongoose from 'mongoose'

// tslint:disable-next-line: no-var-requires
require('dotenv').config();

test('GrapQL return mongoose Document from accounts DB', async () => {
    // fake account document, juste one field for test purpose
    const reference = {
        limit: 10000
    }

    // our DB URI
    const uri = `mongodb+srv://${process.env.DB_HOST_ATLAS}:${process.env.DB_PASSWORD}@${process.env.DB_ADRESS}/${process.env.DB_NAME}?retryWrites=true&w=majority`
    const database = mongoose.connection
    // handle errors
    database.on('error', console.error.bind(console, 'connection error:'));
    // open the connection
    await database.openUri(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    // id mock
    const _id = "5ca4bbc7a2dd94ee58162a48"
    // exemple of query : SELECT limit from ACCOUNTS where _id = mock
    const query: mongoose.Document = await accountModel.findOne({ _id }, {limit: 1, _id: 0}).exec()
    // close the connection
    database.close()
    // return fetched data
    expect(query.toJSON()).toEqual(reference)
})