
import { accountModel } from "../../database/accountsCollection";
import mongoose from 'mongoose'

test('GrapQL return mongoose Document from accounts DB', async () => {
    const reference = { // fake account document, juste one field for test purpose
        limit: 10000
    }

    const uri = `mongodb+srv://adminMaster:AuDdjKB1KIZYnp1T@fallingangel-c6oh4.gcp.mongodb.net/sample_analytics?retryWrites=true&w=majority`
    const database = mongoose.connection
    const _id = "5ca4bbc7a2dd94ee58162a48"
    // handle errors
    database.on('error', console.error.bind(console, 'connection error:'));
    // open the connection
    await database.openUri(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    // exemple of query : SELECT limit from ACCOUNTS where _id = mock
    const query: mongoose.Document = await accountModel.findOne({ _id }, {limit: 1, _id: 0}).exec()
    // close the connection
    database.close()
    // return fetched data
    expect(query.toJSON()).toEqual(reference)
})