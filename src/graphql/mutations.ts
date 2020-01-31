const fileModule = require('fs')

const mutations = {
    /**
    * resolver to set data in JSON file from a GraphQL query
    * @param {Number} level - the level to set
    */
    setLevel: async (root: any, args: number) => {
        fileModule.readFile('data.json', function (err: {message: string}, data: string) {
            if (err) throw err;
            const json = JSON.parse(data);
            json.level = args;
            fileModule.writeFile("src/database/data.json", JSON.stringify(json), function (err: {message: string}) {
                if (err) throw err;
            });
        })
    }
}

module.exports = mutations