import fs from "fs";

// resolver to read JSON file from a GraphQL query
const getLevel = async (): Promise<number> => {
    // parse and read data.json
    const data: { level: number } = JSON.parse(fs.readFileSync('src/database/data.json', 'utf-8'))
    // return parsed object level
    return data.level
}

export default getLevel