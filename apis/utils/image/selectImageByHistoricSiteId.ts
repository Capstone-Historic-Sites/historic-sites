import {Image} from "../interfaces/image";
import {connect} from "../../src/database";

export async function selectImageByHistoricSiteId(selectImageByHistoricSiteId : string | null) {
    try {
    const mysqlConnection = await connect();

    const mySqlQuery = 'SELECT BIN_TO_UUID(selectImageByHistoricSiteId) as selectImageByHistoricSiteId FROM image WHERE selectImageByHistoricSiteId = UUID_TO_BIN(:selectImageByHistoricSiteId)'

    const [rows] =  await mysqlConnection.execute(mySqlQuery, {selectImageByHistoricSiteId})

    return rows
    } catch (error) {
        console.log(error)
        return undefined
    }
}