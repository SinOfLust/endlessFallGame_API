import fs from "fs";
import fetch from 'node-fetch'
import { Folders } from '../enums'

const category: Folders = Folders.skinsCharacter

test('resolver getSkins return the correct files URLs that are on the server', () => {
    const references: string[] = []

    const images: string[] = fs.readdirSync(`public/skins/${category}/`)
    images.forEach((image: string) => {
        references.push(`http://localhost:4000/skins/${category}/${image}`)
    })

    const query = `
    {
        getSkins(category: skinsCharacter)
    }
    `;
    fetch(`http://localhost:4000/graphql`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query
        })
    }).then(response => response.json()).then((json) => {
        expect(json.data.getSkins).toEqual(references)
    })
})