import {HistoricSite} from '../interfaces/historic-site'
import {connect} from '../../src/database'

export async function updateHistoricSite(historicSite: HistoricSite) {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = 'UPDATE historicSite SET historicSiteCost = :historicSiteCost, historicSiteDate = :historicSiteDate, historicSiteDescription = :historicSiteDescription, historicSiteMunicipality = :historicSiteMunicipality, historicSiteName = :historicSiteName WHERE historicSiteId = UUID_TO_BIN(:historicSiteId)'
        const [rows] = await mySqlConnection.execute(mySqlQuery, {historicSite})
        return 'Historic Site Updated Successfully'
    } catch (error) {
        console.log(error)
    }
}