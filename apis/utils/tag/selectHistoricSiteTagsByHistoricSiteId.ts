import {HistoricSiteTag} from "../interfaces/historic-site-tag";
import {connect} from "../../src/database";

async function getHisroticSiteByHistoricSiteId(historicSiteTagHistoricSiteId : string | null,) {
    try {
        const mysqlConnection = await connect();

        const mySqlQuery = 'SELECT BIN_TO_UUID(historicSiteTagHistoricSiteId) as historicSiteTagHistoricSiteId, historicSiteTagTagId, FROM HistoricSiteTag WHERE historicSiteTagHistoricSiteId = UUID_TO_BIN(:historicSiteTagHistoricSiteId)'

        const [rows] =  await mysqlConnection.execute(mySqlQuery, historicSiteTagHistoricSiteId)

        return rows
    } catch (error) {
        console.log(error)
        return undefined
    }
}