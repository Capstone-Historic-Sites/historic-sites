import {connect} from "../../src/database";

export async function selectAllImages() {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = 'SELECT BIN_TO_UUID(imageId) as imageId, BIN_TO_UUID(imageHistoricSiteId) as imageHistoricSiteId, imageDateAdded, imageName, imagePath FROM image'
        const [rows] = await mySqlConnection.execute(mySqlQuery)
        return rows
    } catch (error) {
        console.log(error)
        return error.message
    }
}