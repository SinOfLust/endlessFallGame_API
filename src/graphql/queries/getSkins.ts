import fs from "fs";
import { Folders } from "../enums";

/**
 * resolver to fetch files URL within public/skins directory from a GraphQL query
 */
const getSkins = async (root: any, { category }: { category: Folders }): Promise<string[]> => {
    // Read requested directory
    const images: string[] = fs.readdirSync(`public/skins/${category}`)
    const imagesUrl: string[] = []
    // add each skins URL's in requested directory in the above array
    images.forEach((image: string) => {
        imagesUrl.push(`http://${process.env.DOMAIN}:${process.env.PORT}/skins/${category}/${image.toString()}`)
    })
    // and return it
    return imagesUrl
}

export default getSkins