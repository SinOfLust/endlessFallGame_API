const fs = require('fs')

const mutations = {
    /**
    * resolver to set data in JSON file from a GraphQL query
    * @param {Number} level - the level to set
    */
    setLevel: async (root, args) => {
        fs.readFile('data.json', function (err, data) {
            if (err) throw err;
            const json = JSON.parse(data);
            json.level = args;
            fs.writeFile("src/database/data.json", JSON.stringify(json), function (err) {
                if (err) throw err;
            });
        })
    }
}

module.exports = mutations