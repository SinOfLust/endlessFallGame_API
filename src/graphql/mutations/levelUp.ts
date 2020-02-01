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

    const oldDatas: { level: number } = JSON.parse(fs.readFileSync('src/database/data.json') as unknown as string)
    const newDatas = incrementor(oldDatas)

    fs.writeFileSync("src/database/data.json", JSON.stringify(newDatas))
    return newDatas.level
}

export default levelUp