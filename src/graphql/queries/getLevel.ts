import fs from "fs";

// resolver to read JSON file from a GraphQL query
const getLevel = async (): Promise<number> => {
    const data: { level: number } = JSON.parse(fs.readFileSync('src/database/data.json', 'utf-8'))
    return data.level
}

export default getLevel