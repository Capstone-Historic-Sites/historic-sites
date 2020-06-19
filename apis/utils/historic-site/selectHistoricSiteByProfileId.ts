import {HistoricSite} from '../interfaces/historic-site'
import {Profile} from '../interfaces/profile'
import {connect} from '../../src/database'

export async function selectHistoricSiteByProfileId(profileId: string) {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = 'SELECT BIN_TO_UUID(historicSiteId) AS historicSiteId, BIN_TO_UUID(historicSiteProfileId) AS historicSiteProfileId, historicSiteCost, historicSiteDate, historicSiteDateAdded, historicSiteDescription, historicSiteLat, historicSiteLong, historicSiteMunicipality, historicSiteName, historicSiteState FROM historicSite WHERE historicSiteProfileId = UUID_TO_BIN(:profileId)'
        const [rows] = await mySqlConnection.execute(mySqlQuery, {profileId})
        return rows
    } catch (error) {
        console.log(error)
        return error.message
    }
}