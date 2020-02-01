import fs from "fs";
import mutation from '../mutations'

test('resolver levelUp return the old level + 1', () => {

    const oldDatas: { level: number } = JSON.parse(fs.readFileSync('src/database/data.json') as unknown as string)

    expect(mutation.levelUp()).toBe(oldDatas.level + 1)
})