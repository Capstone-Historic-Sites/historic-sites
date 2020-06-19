import {HistoricSiteTag} from "../interfaces/historic-site-tag";
import {connect} from "../../src/database";

export async function selectHistoricSiteTagsByHistoricSiteId(historicSiteTagHistoricSiteId : string) {
    try {
        const mysqlConnection = await connect();

        const mySqlQuery = 'SELECT BIN_TO_UUID(tagId) as tagId, tagEndDate, tagName, tagStartDate FROM historicSiteTag INNER JOIN tag ON historicSiteTag.historicSiteTagTagId = tag.tagId WHERE historicSiteTagHistoricSiteId = UUID_TO_BIN(:historicSiteTagHistoricSiteId)'

        const [rows] =  await mysqlConnection.execute(mySqlQuery, {historicSiteTagHistoricSiteId})

        return rows
    } catch (error) {
        console.log(error)
        return undefined
    }
}