import {Search} from "../interfaces/search";
import {connect} from '../../src/database'

export async function searchHistoricSite(search: Search) {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = `SELECT BIN_TO_UUID(historicSiteId) AS historicSiteId, BIN_TO_UUID(historicSiteProfileId) AS historicSiteProfileId, historicSiteCost, historicSiteDate, historicSiteDateAdded, historicSiteDescription, historicSiteLat, historicSiteLong, historicSiteMunicipality, historicSiteName, historicSiteState FROM historicSite WHERE ${search.attribute} = ${search.value}`
        const [rows] = await mySqlConnection.execute(mySqlQuery, {search})
        return rows
    } catch (error) {
        console.log(error)
    }
}