import {connect} from "../../src/database";
import {HistoricSiteTag} from "../interfaces/historic-site-tag";

export async function insertHistoricSiteTag(historicSiteTag: HistoricSiteTag) {
try {
    const mysqlConnection = await connect()
    const mySqlQuery = "INSERT INTO historicSiteTag(historicSiteTagHistoricSiteId, historicSiteTagTagId) VALUES(UUID_TO_BIN(:historicSiteTagHistoricSiteId), UUID_TO_BIN(:historicSiteTagTagId))"
    const [rows] = await mysqlConnection.execute(mySqlQuery, historicSiteTag)
    return "Tags Successfully Added to Site"
}catch (error) {console.log (error)}
}