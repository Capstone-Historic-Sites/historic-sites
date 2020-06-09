import {HistoricSite} from '../interfaces/historic-site'
import {connect} from '../../src/database'

export async function getAllHistoricSites() {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = 'SELECT BIN_TO_UUID(historicSiteId) AS historicSiteId, BIN_TO_UUID(historicSiteProfileId) AS historicSiteProfileId, historicSiteCost, historicSiteDate, historicSiteDateAdded, historicSiteDescription, historicSiteLat, historicSiteLong, historicSiteMunicipality, historicSiteName, historicSiteState FROM historicSite'
        const [rows] = await mySqlConnection.execute(mySqlQuery)
        return rows
    } catch (error) {
        console.log(error)
    }
}