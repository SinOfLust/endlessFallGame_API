import fileModule from 'fs';

const mutations = {
    setLevel: async (root: any, level: number): Promise<void> => {
        fileModule.readFile('src/database/data.json', function (err: {message: string}, data: Buffer): void {
            if (err) throw err;
            let json: {level: number} = JSON.parse(data as unknown as string);
            json.level = level
            fileModule.writeFile("src/database/data.json", JSON.stringify(json), function (err: {message: string}) {
                if (err) throw err;
            });
        })
    }
}

export default mutations