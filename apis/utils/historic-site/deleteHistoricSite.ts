import {HistoricSite} from '../interfaces/historic-site'
import {connect} from '../../src/database'

export async function deleteHistoricSite(historicSiteId: string) {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = 'DELETE FROM historicSite WHERE historicSiteId = UUID_TO_BIN(:historicSiteId)'
        const [rows] = await mySqlConnection.execute(mySqlQuery, {historicSiteId})
        return 'Historic Site Deleted Successfully'
    } catch (error) {
        console.log(error)
        return error.message
    }
}