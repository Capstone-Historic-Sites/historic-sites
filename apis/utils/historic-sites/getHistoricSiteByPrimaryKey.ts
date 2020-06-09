import {HistoricSite} from '../interfaces/historic-site'
import {connect} from '../../src/database'

export async function getHistoricSiteByPrimaryKey(historicSiteId: string) {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = 'SELECT BIN_TO_UUID(historicSiteId) AS historicSiteId, BIN_TO_UUID(historicSiteProfileId) AS historicSiteProfileId, historicSiteCost, historicSiteDate, historicSiteDateAdded, historicSiteDescription, historicSiteLat, historicSiteLong, historicSiteMunicipality, historicSiteName, historicSiteState FROM historicSite WHERE historicSiteId = UUID_TO_BIN(:historicSiteId)'
        const [rows] = await mySqlConnection.execute(mySqlQuery, historicSiteId)
        return rows
    } catch (error) {
        console.log(error)
    }
}