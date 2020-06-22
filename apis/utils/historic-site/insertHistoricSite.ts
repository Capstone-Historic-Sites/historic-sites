import {HistoricSite} from '../interfaces/historic-site'
import {connect} from '../../src/database'

export async function insertHistoricSite(historicSite: HistoricSite) {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = 'INSERT INTO historicSite(historicSiteId, historicSiteProfileId, historicSiteCost, historicSiteDate, historicSiteDateAdded, historicSiteDescription, historicSiteLat, historicSiteLong, historicSiteMunicipality, historicSiteName, historicSiteState) VALUES(UUID_TO_BIN(UUID()), UUID_TO_BIN(:historicSiteProfileId), :historicSiteCost, :historicSiteDate, NOW(), :historicSiteDescription, :historicSiteLat, :historicSiteLong, :historicSiteMunicipality, :historicSiteName, :historicSiteState)'
        const [rows] = await mySqlConnection.execute(mySqlQuery, historicSite)
        const getHistoricSiteId = 'SELECT BIN_TO_UUID(historicSiteId) AS historicSiteId FROM historicSite WHERE historicSiteName = :historicSiteName'
        const [historicSiteId] = await mySqlConnection.execute(getHistoricSiteId, historicSite)
        return {message: 'Historic Site Uploaded Successfully', historicSiteId}
    } catch (error) {
        console.log(error)
        return error.message
    }
}
