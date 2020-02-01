import fs from "fs";
import { Folders } from "../enums";

/**
 * resolver to fetch files URL within public/skins directory from a GraphQL query
 */
const getSkins = async (root: any, { category }: { category: Folders }): Promise<string[]> => {
    const images: string[] = fs.readdirSync(`public/skins/${category}`)
    const imagesUrl: string[] = []

    images.forEach((image: string) => {
        imagesUrl.push(`http://${process.env.DOMAIN}:${process.env.PORT}/skins/${category}/${image.toString()}`)
    })
    return imagesUrl
}

export default getSkins