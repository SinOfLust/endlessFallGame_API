const fs = require('fs')
const mongoose = require('mongoose');
const uri = "mongodb+srv://adminMaster:AuDdjKB1KIZYnp1T@fallingangel-c6oh4.gcp.mongodb.net/sample_analytics?retryWrites=true&w=majority";
const model = require('./collections/collections')


const resolvers = {
    Query: {
        /**
        * resolver to fetch files within public/skins directory from a GraphQL query
        */
        getSkins: async () => {
            const images = fs.readdirSync('public/skins')
            let imagesUrl = []

            images.forEach((image) => {
                imagesUrl.push(`http://localhost:4000/skins/${image.toString().trim()}`)
            })
            return imagesUrl
        },
        /**
        * Open a mongoDB connection and query account informations with args 
        */
        account: async (root, { _id }) => {
            mongoose.connect(uri, { useNewUrlParser: true });
            const db = mongoose.connection;
            db.on('error', console.error.bind(console, 'connection error:'));
            //exemple of query : SELECT * from ACCOUNTS where id = args // exemple to set in query args : 5ca4bbc7a2dd94ee58162a49
            const query = await model.find({ _id: _id }).exec()
            console.log(query); // dev purpose : return [{_id: String, limit: Int, products: [String]}]
            
            return query
        },
        /**
        * resolver to read JSON file from a GraphQL query
        */
        getLevel: async () => {
            const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'))
            return data.level
        }
    },
    Mutation: {
        /**
        * resolver to set data in JSON file from a GraphQL query
        * @param {Number} level - the level to set
        */
        setLevel: async (root, args) => {
            fs.readFile('data.json', function (err, data) {
                if (err) throw err;
                const json = JSON.parse(data);
                json.level = args;
                fs.writeFile("data.json", JSON.stringify(json), function (err) {
                    if (err) throw err;
                });
            })
        }
    }
}

exports.resolvers = resolvers