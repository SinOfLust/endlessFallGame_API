import mongoose from "mongoose";
import { Folders } from "./enums";
import getSkins from './queries/getSkins'
import getAccounts from './queries/getAccounts'
import getLevel from './queries/getLevel'

// tslint:disable-next-line: max-line-length
const queries: { getSkins(root: any, { category }: { category: Folders }): Promise<string[]>, getAccounts(root: any, { _id, }: { _id: string }): Promise<mongoose.Document[]>, getLevel(): Promise<number> } = {
    getSkins,
    getAccounts,
    getLevel
}

export default queries