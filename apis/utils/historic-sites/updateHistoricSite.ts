import {HistoricSite} from '../interfaces/historic-site'
import {connect} from '../../src/database'

export async function updateHistoricSite(object: object) {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = 'UPDATE historicSite SET object.attribute = object.value WHERE historicSiteId = UUID_TO_BIN(object.historicSiteId)'
        const [rows] = await mySqlConnection.execute(mySqlQuery, object)
        return 'Historic Site Updated Successfully'
    } catch (error) {
        console.log(error)
    }
}