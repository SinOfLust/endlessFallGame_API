import fs from "fs";

// resolver to increment level in data.json
const levelUp = (): number => {
    const incrementor = (oldData: { level: number }) => {
        const newData = {
            ...oldData,
            level: oldData.level + 1
        }
        return newData
    }

    // Parse and read data.json
    const oldDatas: { level: number } = JSON.parse(fs.readFileSync('src/database/data.json') as unknown as string)
    // Increment his level
    const newDatas = incrementor(oldDatas)
    // Rewrite on data.json our new value
    fs.writeFileSync("src/database/data.json", JSON.stringify(newDatas))
    // Return the new value
    return newDatas.level
}

export default levelUp