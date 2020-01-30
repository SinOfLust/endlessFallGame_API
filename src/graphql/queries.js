const fs = require('fs')
const mongoose = require('mongoose');
const uri = `mongodb+srv://${process.env.DB_HOST_ATLAS}:${process.env.DB_PASSWORD}@${process.env.DB_ADRESS}/${process.env.DB_NAME}?retryWrites=true&w=majority`
const { accountsModel } = require('../database/mongoCollections')

const queries = {
    /**
    * resolver to fetch files URL within public/skins directory from a GraphQL query
    */
    getSkins: async () => {
        const images = fs.readdirSync('public/skins')
        let imagesUrl = []

        images.forEach((image) => {
            imagesUrl.push(`http://${process.env.DOMAIN}:${process.env.PORT}/skins/${image.toString().trim()}`)
        })
        return imagesUrl
    },
    /**
    * Open a mongoDB connection and query account informations with args 
    */
    account: async (root, { _id, }) => {
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        //exemple of query : SELECT * from ACCOUNTS where id = args // exemple to set in query args : 5ca4bbc7a2dd94ee58162a49
        const query = await accountsModel.find({ _id: _id }).exec()
        return query
    },
    /**
    * resolver to read JSON file from a GraphQL query
    */
    getLevel: async () => {
        const data = JSON.parse(fs.readFileSync('src/database/data.json', 'utf-8'))
        return data.level
    }
}

module.exports = queries