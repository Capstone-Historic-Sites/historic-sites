import {connect} from '../../src/database'

export async function searchHistoricSite(search: string) {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = `SELECT BIN_TO_UUID(historicSiteId) AS historicSiteId, BIN_TO_UUID(historicSiteProfileId) AS historicSiteProfileId, historicSiteCost, historicSiteDate, historicSiteDateAdded, historicSiteDescription, historicSiteLat, historicSiteLong, historicSiteMunicipality, historicSiteName, historicSiteState FROM historicSite WHERE historicSiteDescription LIKE '%${search}%' OR historicSiteMunicipality LIKE '%${search}%' OR historicSiteName LIKE '%${search}%'`
        const [rows] = await mySqlConnection.execute(mySqlQuery, {search})
        return rows
    } catch (error) {
        console.log(error)
        return error.message
    }
}