import fs from "fs";

test('resolver levelUp return the old level + 1', () => {
    // fetching data from local file
    const oldDatas: { level: number } = JSON.parse(fs.readFileSync('src/database/data.json') as unknown as string)
    // mock for the levelUp resolver
    const levelUp = (oldData: { level: number }) => {
        const newData = {
            ...oldData,
            level: oldData.level + 1
        }
        return newData
    }

    // now we have our resolved datas
    const leveled = levelUp(oldDatas)

    // our reference object, basically juste our original datas with level incremented
    const reference = {
        ...oldDatas,
        level: oldDatas.level + 1
    }

    expect(leveled).toEqual(reference)
})