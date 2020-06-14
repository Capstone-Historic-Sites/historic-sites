import {HistoricSite} from '../interfaces/historic-site'
import {Tag} from "../interfaces/tag";
import {connect} from '../../src/database'

export async function selectHistoricSiteByTagId(tagId: string) {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = 'SELECT BIN_TO_UUID(historicSiteId) AS historicSiteId, BIN_TO_UUID(historicSiteProfileId) AS historicSiteProfileId, historicSiteCost, historicSiteDate, historicSiteDateAdded, historicSiteDescription, historicSiteLat, historicSiteLong, historicSiteMunicipality, historicSiteName, historicSiteState FROM historicSiteTag INNER JOIN historicSite ON historicSiteTag.historicSiteTagHistoricSiteId = historicSite.historicSiteId WHERE historicSiteTagTagId = UUID_TO_BIN(:tagId)'
        const [rows] = await mySqlConnection.execute(mySqlQuery, {tagId})
        return rows
    } catch (error) {
        console.log(error)
    }
}