import fs from "fs";
import mongoose from "mongoose";
import { accountModel } from "../database/accountsCollection";

const uri = `mongodb+srv://${process.env.DB_HOST_ATLAS}:${process.env.DB_PASSWORD}@${process.env.DB_ADRESS}/${process.env.DB_NAME}?retryWrites=true&w=majority`

const queries: {getSkins(): Promise<string[]>, account(root: any, { _id, }: {_id: string}): Promise<mongoose.Document[]>, getLevel(): Promise<number> } = {
    // resolver to fetch files URL within public/skins directory from a GraphQL query
    getSkins: async (): Promise<string[]> => {
        const images: string[] = fs.readdirSync('public/skins')
        const imagesUrl: string[] = []

        images.forEach((image: string) => {
            imagesUrl.push(`http://${process.env.DOMAIN}:${process.env.PORT}/skins/${image.toString().trim()}`)
        })
        return imagesUrl
    },
    // Open a mongoDB connection and query account informations with args
    account: async (root: any, { _id, }: {_id: string}): Promise<mongoose.Document[]> => {
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        const db: mongoose.Connection = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        // exemple of query : SELECT * from ACCOUNTS where id = args // exemple to set in query args : 5ca4bbc7a2dd94ee58162a49
        const query: mongoose.Document[] = await accountModel.find({ _id }).exec()
        return query
    },
    // resolver to read JSON file from a GraphQL query
    getLevel: async (): Promise<number> => {
        const data: {level: number} = JSON.parse(fs.readFileSync('src/database/data.json', 'utf-8'))
        return data.level
    }
}

export default queries