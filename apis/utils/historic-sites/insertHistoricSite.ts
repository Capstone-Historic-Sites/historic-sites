import {HistoricSite} from '../interfaces/historic-site'
import {connect} from '../../src/database'

export async function insertHistoricSite(historicSite: HistoricSite) {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = 'INSERT INTO historicSite(historicSiteId, historicSiteProfileId, historicSiteCost, historicSiteDate, historicSiteDateAdded, historicSiteDescription, historicSiteLat, historicSiteLong, historicSiteMunicipality, historicSiteName, historicSiteState) VALUES(UUID_TO_BIN(UUID()), UUID_TO_BIN(:historicSiteProfileId), :historicSiteCost, :historicSiteDate, NOW(), :historicSiteDescription, :historicSiteLat, :historicSiteLong, :historicSiteMunicipality, :historicSiteName, :historicSiteState)'
        const [rows] = await mySqlConnection.execute(mySqlQuery, {historicSite})
        return 'Historic Site Uploaded Successfully'
    } catch (error) {
        console.log(error)
    }
}
