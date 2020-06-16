import {Image} from "../interfaces/image";
import {connect} from "../../src/database";

export async function selectImageByHistoricSiteId(historicSiteId : string ) {
    try {
    const mysqlConnection = await connect();

    const mySqlQuery = 'SELECT BIN_TO_UUID(imageId) as imageId, BIN_TO_UUID(imageHistoricSiteId) as imageHistoricSiteId, imageDateAdded, imageName, imagePath FROM image WHERE imageHistoricSiteId = UUID_TO_BIN(:historicSiteId)'

    const [rows] =  await mysqlConnection.execute(mySqlQuery, {historicSiteId})

    return rows
    } catch (error) {
        console.log(error)
        return undefined
    }
}