import mongoose from "mongoose";
import { accountModel } from "../../database/accountsCollection";

const uri = `mongodb+srv://${process.env.DB_HOST_ATLAS}:${process.env.DB_PASSWORD}@${process.env.DB_ADRESS}/${process.env.DB_NAME}?retryWrites=true&w=majority`

/**
 * resolver to open a mongoDB connection and query accounts informations with args
 */
const getAccounts = async (root: any, { _id }: { _id: string }): Promise<mongoose.Document[]> => {

    const database = mongoose.connection
    // handle errors
    database.on('error', console.error.bind(console, 'connection error:'));
    // open the connection
    await database.openUri(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    // exemple of query : SELECT * from ACCOUNTS where id = args // exemple to set in query args : 5ca4bbc7a2dd94ee58162a49
    const query: mongoose.Document[] = await accountModel.find({ _id }).exec()
    // close the connection
    await database.close()
    // return fetched data
    return query
}

export default getAccounts