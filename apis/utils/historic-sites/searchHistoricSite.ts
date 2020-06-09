import {HistoricSite} from '../interfaces/historic-site'
import {connect} from '../../src/database'

export async function searchHistoricSite(object: object) {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = 'SELECT BIN_TO_UUID(historicSiteId) AS historicSiteId, BIN_TO_UUID(historicSiteProfileId) AS historicSiteProfileId, historicSiteCost, historicSiteDate, historicSiteDateAdded, historicSiteDescription, historicSiteLat, historicSiteLong, historicSiteMunicipality, historicSiteName, historicSiteState FROM historicSite WHERE object.attribute = object.value'
        const [rows] = await mySqlConnection.execute(mySqlQuery, object)
        return rows
    } catch (error) {
        console.log(error)
    }
}